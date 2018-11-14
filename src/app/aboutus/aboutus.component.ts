import { Component, OnInit } from '@angular/core';
import { Teams } from './mockaboutus';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  teams = Teams;
  prefix = '../../assets/img/';

  constructor() { }

  ngOnInit() {

  }

}
