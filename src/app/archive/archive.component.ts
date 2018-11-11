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
      "p13.jpg", "p14.jpg", "p15.jpg", "p16.jpg",
      "p17.jpg", "p18.jpg", "p19.jpg", "p20.jpg",
      "p21.jpg", "p22.jpg", "p23.jpg", "p24.jpg",
      "p25.jpg", "p26.jpg", "p27.jpg", "p28.jpg",
      "p29.jpg", "p30.jpg", "p31.jpg", "p32.jpg",
      "p33.jpg",
  ];

  constructor() {
    
  }

  ngOnInit() {
  }

}
