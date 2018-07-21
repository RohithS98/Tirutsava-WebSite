
import { ImageService } from './../images/shared/image.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges{
  displayName = true;
  cur_img_num = 0;
  modal = false;
  path="";
  srcc = "";
  

  Day1(){
    
      this.displayName = true;
    
    if(this.modal === true){
      this.modal = false;
    }
  }

  back(){
    this.cur_img_num --;
    this.path = this.visibleImages[this.cur_img_num - 1].url;
  }
  next(){
    this.cur_img_num ++;
    this.path = this.visibleImages[this.cur_img_num - 1].url;
  }


  modalOpen(img){
    this.cur_img_num = img.id;
    this.path = this.visibleImages[img.id-1].url;
    

    
    
    

    if(this.displayName === true){
      this.displayName = false;
    }else{
      this.displayName = true;
    }
    if(this.modal === true){
      this.modal = false;
    }else{
      this.modal = true;
    }
  }

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
