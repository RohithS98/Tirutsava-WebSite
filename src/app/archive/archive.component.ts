import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  prefix = "../../assets/archive/";
  pictures = [
      "ps1.jpg", "ps2.jpg", "ps3.jpg", "ps4.jpg",
      "ps5.jpg", "ps6.jpg", "ps7.jpg", "ps8.jpg",
      "ps9.jpg", "ps10.jpg", "ps11.jpg", "ps12.jpg",
  ];

  constructor() {
    
  }

  ngOnInit() {
  }

}
