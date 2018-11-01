import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  prefix = "../../assets/archive/";
  pictures = [
      "p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg",
      "p5.jpg", "p6.jpg", "p7.jpg", "p8.jpg",
      "p9.jpg", "p10.jpg", "p11.jpg", "p12.jpg",
  ];

  constructor() {
    
  }

  ngOnInit() {
  }

}
