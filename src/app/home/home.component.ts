import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

//   animatedLogo = anime.timeline({
//     autoplay: false,
//   }).add({
//     targets: '#logo',
//     scale: ['0.01','1'],
//     rotate: ['0.2turn','1turn'],
//     easing: 'easeOutElastic',
//     elasticity:'100',
//     duration: 3500,
//     offset: 0,
//   }).add({
//     targets: "#linelogo .a",
//     stroke: '#fe8d07',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 1200,
//     offset : 0,
//   }).add({
//     targets: "#linelogo .a1",
//     stroke: '#fe8d07',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 1000,
//     offset : 0,
// });

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    anime.timeline({
    }).add({
      targets: '#logo',
      scale: ['0.01','1'],
      rotate: ['0.2turn','1turn'],
      easing: 'easeOutElastic',
      elasticity:'100',
      duration: 3500,
      offset: 0,
    }).add({
      targets: "#linelogo .a",
      stroke: '#fe8d07',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1200,
      offset : 0,
    }).add({
      targets: "#linelogo .a1",
      stroke: '#fe8d07',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      offset : 0,
  });
  }

}
