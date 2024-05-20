import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service'; // Update the import path as needed

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  images: string[] = [];
  selectedIndex: number | null = null; // Add this line

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(
      data => {
        console.log('Images:', data);
        this.images = data;
      },
      error => {
        console.error('Error fetching images:', error);
      }
    );
  }
  
  selectImage(index: number): void { // Add this method
    this.selectedIndex = index;
  }

  // Add any additional methods to handle actions for the selected image
}
