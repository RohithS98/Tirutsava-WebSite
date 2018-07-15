import { Component, OnInit, Input } from '@angular/core';
import { mockEvents, mockTechEvents, mockCultEvents } from './mockevents';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  selected="true";
  events = mockEvents;
  techEvents = mockTechEvents;
  cultEvents = mockCultEvents;
  
  constructor() {}

  ngOnInit() {
    
  }

  
}
