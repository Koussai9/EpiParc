// image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://localhost:8080/api/listImages'; // Adjust URL as needed

  constructor(private http: HttpClient) { }

  getImages(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
