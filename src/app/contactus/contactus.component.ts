import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import * as anime from 'animejs';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    anime({
      targets:".icon",
      translateY: ['500', '0'],
      rotate:['0.5turn','0turn'],
      delay: function(el,i,l){
        return 100 + i*150;
      },
      duration: 1000,
      scale: ['0.05','1'],
    });

  }
}
