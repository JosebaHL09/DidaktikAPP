import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
declare var google;

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  map = null;
  markers: any = [
    {

      lati: 43.334481,
      long: -3.062792,

      title: 'Primer castillo del monte Serantes'
    },
    {

      lati: 43.332622,
      long: -3.040442,

      title: 'Mural Eskorbuto'
    },
    {

      lati: 43.334328,
      long: -3.039364,

      title: 'Estatua de la sardinera'
    },
    {

      lati: 43.331710,
      long: -3.034654,

      title: 'Calle Itsasalde'
    },
    {

      lati: 43.330703,
      long: -3.031600,

      title: 'Club de remo la Sotera'
    },
    {

      lati: 43.330703,
      long: -3.031600,

      title: 'Puerto de Santurtzi'
    },
    {

      lati: 43.328831,
      long: -3.032961,

      title: 'Ayuntamiento de Santurtzi'
    },
  ];
  lati;
  long;

  constructor(private geolocation: Geolocation,private route: Router) { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then((resp) => {
      this.lati = resp.coords.latitude
      this.long = resp.coords.longitude
      let style = [
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ]

      // meter el mapa en el div que tenemos
      const mapEle: HTMLElement = document.getElementById('map');
      // poner las coordenadas
      const myLatLng = new google.maps.LatLng(this.lati, this.long);

      // crear el mapa
      this.map = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 16,
        styles: style,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        disableDefaultUI: true,
        minZoom: 3
      });

      //cargar el mapa
      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        mapEle.classList.add('show-map');
      });


      //marcador de posicion del usuario
      var marker = new google.maps.Marker({
        position: myLatLng,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillOpacity: 1,
          strokeWeight: 2,
          fillColor: '#5384ED',
          strokeColor: '#ffffff',
        }
      });
      marker.setMap(this.map);
      this.addMarker(this.markers);
      var circle = new google.maps.Circle({
        center: marker.getPosition(),
        radius: 100,
        fillColor: "#0000FF",
        fillOpacity: 0.1,
        map: this.map,
        strokeColor: "#FFFFFF",
        strokeOpacity: 0.1,
        strokeWeight: 2
      });

      this.map.clear();


    }).catch((error) => {
      console.log('Error getting location', error);
    });


  }
  addMarker(markers) {
    //preguntar como quitar el max-width que genera google maps automaticamente
    let content =
      "<div id='mydiv' style='text-align:center'>" +
      "<h3>Castillito bien bacano</h3>"+
      "<img src='../../assets/img/castillo.jpg' height='150px' width='auto'/><br>" +
      "<ion-button (click)='goInstrucciones()' color='dark'><ion-icon name='play-outline' style='font-size:20px'></ion-icon></ion-button>"+
      "</div>"

    var infowindow = new google.maps.InfoWindow({
      maxWidth: 250
    });
    
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.lati, marker.long);
      let mapMarker = new google.maps.Marker({
        position: position,
        latitude: marker.lati,
        longitude: marker.long
      })

      
      google.maps.event.addListener(mapMarker, 'click', function () {
        infowindow.setContent(content);
        infowindow.open(this.map, mapMarker);
      });
      mapMarker.setMap(this.map);
    }
  }
  goInstrucciones() {
    this.route.navigate(['/instrucciones']);
  }
  
}
window.onload = () => {
  let elem: HTMLElement = document.getElementById('mydiv');
    elem.setAttribute("style", "color:red; border: 1px solid blue;");
};
