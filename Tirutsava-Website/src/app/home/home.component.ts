import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickCount = 0
  constructor() { }
  ngOnInit() {
    
  }
  
  clicked(){
    this.clickCount = this.clickCount +1;
  }
}
