import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { GuneaService } from '../services/gunea.service';
import { Gunea } from '../interfaces/gunea';

declare var google;

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  map = null;
  //markers: Gunea[] = [];
  refresh = false;
  markers: any = [
    {
      id: 0,
      lati: 43.334481,
      long: -3.062792,
      title: 'Primer castillo del monte Serantes',
      url: '/castillo-info',
      img: '../../assets/img/castillo.jpg'
    },
    {
      id: 1,
      lati: 43.332622,
      long: -3.040442,
      title: 'Mural Eskorbuto',
      url: '/mural-info',
      img: '../../assets/img/mural.jpg'
    },
    {
      id: 2,
      lati: 43.334328,
      long: -3.039364,

      title: 'Estatua de la sardinera'
    },
    {
      id: 3,
      lati: 43.331710,
      long: -3.034654,

      title: 'Calle Itsasalde'
    },
    {
      id: 4,
      lati: 43.330703,
      long: -3.031600,
      title: 'Club de remo la Sotera',
      url: '/remo-info',
      img: '../../assets/img/remo.jpg'
    },
    {
      id: 5,
      lati: 43.329965,
      long: -3.029433,
      title: 'Puerto de Santurtzi',
      url: '/puerto-info',
      img: '../../assets/img/puerto.jpg'
    },
    {
      id: 6,
      lati: 43.328831,
      long: -3.032961,
      title: 'Ayuntamiento de Santurtzi',
      url: '/ayuntamiento-info',
      img: '../../assets/img/mentxu.jpg'
    },
  ];
  lati;
  long;
  marker;

  constructor(private geolocation: Geolocation, private route: Router, /*private guneaService: GuneaService*/) { }

  /*getMarkers(): void {
    this.guneaService.getGuneak(this.refresh)
      .subscribe(data => { this.markers = data; },
        error => console.log('Error::' + error));
    //this.guneaService.getGuneak(this.refresh).subscription.unSuscribe();
    console.log(this.markers.length)
  }*/


  ngOnInit() {
    //this.getMarkers()
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
      //const myLatLng = new google.maps.LatLng(this.lati, this.long);
      const myLatLng = new google.maps.LatLng(43.334570, -3.064050);
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
      this.marker = new google.maps.Marker({
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
      this.marker.setMap(this.map);
      //setTimeout(this.updateMarker, 5000)

      var circle = new google.maps.Circle({
        center: this.marker.getPosition(),
        radius: 50,
        fillColor: "#0000FF",
        fillOpacity: 0.1,
        map: this.map,
        strokeColor: "#FFFFFF",
        strokeOpacity: 0.1,
        strokeWeight: 2
      });
      this.addMarker(this.markers, this.marker);
      this.map.clear();


    }).catch((error) => {
      console.log('Error getting location', error);
    });


  }
  addMarker(markers, marker) {
    var infowindow, id;
    for (let marker of markers) {
      let content =
        "<div id='mydiv' style='text-align:center'>" +
        "<h3>" + marker.title + "</h3>" +
        "<img src=" + marker.img + " height='100px' width='auto'/><br>" +
        "<ion-icon id='boton' name='play-outline' style='font-size:20px'>" +
        "</div>"

      infowindow = new google.maps.InfoWindow({
        maxWidth: 250,
      });
      let position = new google.maps.LatLng(marker.lati, marker.long);
      let mapMarker = new google.maps.Marker({
        id: marker.id,
        position: position,
      })
      google.maps.event.addListener(mapMarker, 'click', function () {
        id = this.id;
        infowindow.setContent(content);
        infowindow.open(this.map, mapMarker);
      });
      mapMarker.setMap(this.map);
      var circle = new google.maps.Circle({
        center: mapMarker.getPosition(),
        radius: 50,
        fillColor: "#fc3232",
        fillOpacity: 0.1,
        map: this.map,
        strokeColor: "#ff0000",
        strokeOpacity: 0.1,
        strokeWeight: 2
      });
    }
    google.maps.event.addListener(infowindow, 'domready', () => {
      var button = document.getElementById('boton');
      var distance = this.getDistance(infowindow, marker)
      if (distance <= 100) {
        button.addEventListener('click', () => {
          this.route.navigate(['/' + this.getUrl(id)]);
        });
      }
    });

  }

  getDistance(p1, p2) {
    var R = 6371000
    var rlat1 = p1.position.lat() * (Math.PI / 180); // Convert degrees to radians
    var rlat2 = p2.position.lat() * (Math.PI / 180); // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = (p2.position.lng() - p1.position.lng()) * (Math.PI / 180);

    var d = 2 * R * Math.atan(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
    return d;
  }

  getUrl(id) {
    var url;
    for (let marker of this.markers) {
      if (marker.id == id) {
        url = marker.url
      }
    }
    console.log(url)
    return url
  }

  /*
  updateMarker() {
    this.geolocation.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then((resp) => {

      this.lati = resp.coords.latitude
      this.long = resp.coords.longitude
      var myLatLng = new google.maps.LatLng(this.lati, this.long);
      this.marker.setPosition(myLatLng)
      this.marker.setMap(this.map);
      console.log("cambio")
    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }*/
}

