import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
  map: google.maps.Map | undefined;
  latitude: number | undefined;
  longitude: number | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyB6ee91E7fnakSo1atMPMntZOTGoNrv6hs',
      libraries: ['places']
    });

    loader.load().then(() => {
      this.getCoordinates();
    });
  }

  getCoordinates() {
    this.http.get<any>('http://localhost:8080/api/coordinates').subscribe(
      data => {
        if (data.LAT && data.LNG) { // Ensure both latitude and longitude are present
          this.latitude = data.LAT;
          this.longitude = data.LNG;
          this.initializeMap(); // Only initialize the map if both coordinates are present
        } else {
          console.error('Latitude or Longitude is missing');
        }
      },
      error => {
        console.error('Error fetching coordinates:', error);
      }
    );
  }
  
  initializeMap() {

    if (this.latitude !== undefined && this.longitude !== undefined) {
      const location = new google.maps.LatLng(this.latitude, this.longitude);
      this.map = new google.maps.Map(this.mapContainer.nativeElement, {
        center: location,
        scrollwheel: false,
        zoom: 17,
        styles: [{
          "featureType": "water",
          "stylers": [{
              "saturation": 43
          }, {
              "lightness": -11
          }, {
              "hue": "#0088ff"
          }]
      }, {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [{
              "hue": "#ff0000"
          }, {
              "saturation": -100
          }, {
              "lightness": 99
          }]
      }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
              "color": "#808080"
          }, {
              "lightness": 54
          }]
      }, {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#ece2d9"
          }]
      }, {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [{
              "color": "#ccdca1"
          }]
      }, {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
              "color": "#767676"
          }]
      }, {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [{
              "color": "#ffffff"
          }]
      }, {
          "featureType": "poi",
          "stylers": [{
              "visibility": "off"
          }]
      }, {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [{
              "visibility": "on"
          }, {
              "color": "#b8cb93"
          }]
      }, {
          "featureType": "poi.park",
          "stylers": [{
              "visibility": "on"
          }]
      }, {
          "featureType": "poi.sports_complex",
          "stylers": [{
              "visibility": "on"
          }]
      }, {
          "featureType": "poi.medical",
          "stylers": [{
              "visibility": "on"
          }]
      }, {
          "featureType": "poi.business",
          "stylers": [{
              "visibility": "simplified"
          }]
      }]

      });
  
      new google.maps.Marker({
        position: location,
        map: this.map
      });
    } else {
      console.error('Latitude or Longitude is undefined');
    }
  }
}
