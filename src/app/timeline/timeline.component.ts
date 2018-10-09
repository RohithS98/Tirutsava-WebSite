import { Component, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {mockDay1} from './mocktimeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css','./timeline.component.less']
})
export class TimelineComponent implements OnInit {

    day = "d1";
    eventFilter = "All";
    eventsDay1 = mockDay1;

    constructor() { }

    ngOnInit() {
    }

}
