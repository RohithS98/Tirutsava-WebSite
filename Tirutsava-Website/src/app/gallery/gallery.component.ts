
import { ImageService } from './../images/shared/image.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges{
  title = 'Recent Photots';
  @Input() filterBy?: string = 'all'
  visibleImages: any[] = [];
  visibleImages2: any[] = [];
  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
    this.visibleImages2 = this.imageService.getImages2();
  }

  ngOnChanges() {
   this.visibleImages = this.imageService.getImages();
   this.visibleImages2 = this.imageService.getImages2();
  }

}
