import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  emailFormControl = new FormControl('',[Validators.required,Validators.email]);
  requiredFormControl = new FormControl('',[Validators.required]);

}
