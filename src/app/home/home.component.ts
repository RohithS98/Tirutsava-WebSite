import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    anime.timeline({
    }).add({
      targets: '.back',
      backgroundColor: '#252525',
      duration: 0,
    }).add({
      targets: '#logo',
      scale: ['0.01', '1'],
      rotate: ['0.2turn', '1turn'],
      easing: 'easeOutElastic',
      elasticity: '100',
      duration: 3500,
      offset: 0,
    }).add({
      targets: '#linelogo .a',
      stroke: '#fe8d07',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1200,
      offset : 0,
    }).add({
      targets: '#linelogo .a1',
      stroke: '#fe8d07',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1000,
      offset : 0,
  }).add({
    targets: '.back',
    backgroundColor: '#101010',
    duration: 1000,
    offset: '-=20',
  });
  }

}
