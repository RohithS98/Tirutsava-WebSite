import { Component, OnInit } from '@angular/core';
import { mockAboutUs } from './mockaboutus';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

    aboutUs = mockAboutUs;

  constructor() { }

  ngOnInit() {
  }

}
