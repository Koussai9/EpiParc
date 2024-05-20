// maps.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  private googleMapsLoaded: boolean = false;

  loadGoogleMapsApi(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.googleMapsLoaded) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB6ee91E7fnakSo1atMPMntZOTGoNrv6hs`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = () => {
        this.googleMapsLoaded = true;
        resolve();
      };
      script.onerror = (error) => {
        reject(error);
      };
    });
  }
}
