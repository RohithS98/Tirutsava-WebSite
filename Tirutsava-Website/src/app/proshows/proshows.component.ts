import { Component, OnInit } from '@angular/core';
import { mockProShows } from './mockproshows';

@Component({
  selector: 'app-proshows',
  templateUrl: './proshows.component.html',
  styleUrls: ['./proshows.component.css']
})
export class ProshowsComponent implements OnInit {
proshows = mockProShows;
  constructor() { }

  ngOnInit() {
  }

}
