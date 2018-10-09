import { Component, OnInit } from '@angular/core';
import { mockWorkshops } from './mockworkshops';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {
workshops = mockWorkshops;

  constructor() { }

  ngOnInit() {
  }

}
