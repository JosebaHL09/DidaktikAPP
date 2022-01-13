import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  map = null;

  lati;
  long;

  constructor(private geolocation: Geolocation) { }

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
      // create a new map by passing HTMLElement
      const mapEle: HTMLElement = document.getElementById('map');
      // create LatLng object
      const myLatLng = new google.maps.LatLng(this.lati, this.long);
      
      // create map
      this.map = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 16,
        styles: style,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        disableDefaultUI: true

      });



      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        mapEle.classList.add('show-map');

      });

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
      var circle = new google.maps.Circle({
        center:marker.getPosition(), 
        radius: 100, 
        fillColor: "#0000FF", 
        fillOpacity: 0.1, 
        map: this.map,
        strokeColor: "#FFFFFF", 
        strokeOpacity: 0.1, 
        strokeWeight: 2 
        });

      marker.setMap(this.map);
      //circle.setMap(this.map);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
    

  }

}
