
import { ImageService } from './../images/shared/image.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {mockgallery,mockimages} from './mockgallery';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges{
  gallery = mockgallery;
  images = mockimages;
  title = 'Recent Photots';

  // @Input() filterBy?: string = 'all'
  // visibleImages: any[] = [];
  // visibleImages2: any[] = [];
  // constructor(private imageService: ImageService) {
  //   this.visibleImages = this.imageService.getImages();
  //   this.visibleImages2 = this.imageService.getImages2();
  // }

  ngOnChanges() {
  //  this.visibleImages = this.imageService.getImages();
  //  this.visibleImages2 = this.imageService.getImages2();
  }

}
