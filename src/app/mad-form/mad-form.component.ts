import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;


@Component({
  selector: 'app-mad-form',
  templateUrl: './mad-form.component.html',
  styleUrls: ['./mad-form.component.css']
})
export class MadFormComponent implements OnInit {

team_name: String = '';
mentor_name: String;
mentor_email: String;
mentor_phone: String;

memName1: String;
memEmail1: String;
memUsername1: String;
memPhone1: String;
memInsti1: String;
memQual1: String;

memName2: String;
memEmail2: String;
memUsername2: String;
memPhone2: String;
memInsti2: String;
memQual2: String;

memName3: String;
memEmail3: String;
memUsername3: String;
memPhone3: String;
memInsti3: String;
memQual3: String;

memName4: String;
memEmail4: String;
memUsername4: String;
memPhone4: String;
memInsti4: String;
memQual4: String;

memName5: String;
memEmail5: String;
memUsername5: String;
memPhone5: String;
memInsti5: String;
memQual5: String;

constructor(private http: HttpClient) { }

  addUser(): void {
    this.http.post('http://localhost:3000/api/member', {}, {responseType: 'text'}).subscribe();
  }
  ngOnInit() {
  }


}
