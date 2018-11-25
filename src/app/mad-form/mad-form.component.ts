import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;

@Component({
  selector: 'app-mad-form',
  templateUrl: './mad-form.component.html',
  styleUrls: ['./mad-form.component.css']
})
export class MadFormComponent implements OnInit {

team_name: String = '';
team_number: String;
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

response: String = 'nothing' ;
num: number;
constructor(private http: HttpClient) { }

  checkNum() {
    this.num = 0;
    if (this.memName1) { this.num++; } else { return; }
    if (this.memName2) { this.num++; } else { return; }
    if (this.memName3) { this.num++; } else { return; }
    if (this.memName4) { this.num++; } else { return; }
    if (this.memName5) { this.num++; } else { return; }
  }

  addUser(): void {
    this.http.post('http://10.21.24.135:3000/api/user',
    {
      uname: this.memUsername1,
      name: this.memName1,
      email: this.memEmail1,
      institute: this.memInsti1,
      qualification: this.memQual1
    }).subscribe(txt => {
      this.response = JSON.stringify(txt['status']);
      if (this.response === '"Success"') {
        this.response = 'Registration Successful!';
      }
    });
  }

  addTeam(): void {
    this.checkNum();
    this.http.post('http://10.21.24.135:3000/api/team',
  {
    team_name : this.team_name,
    mentor_name : this.mentor_name,
    mentor_email : this.mentor_email,
    team_contact : this.team_number,
    members : [
      {
        username : this.memUsername1,
        name : this.memName1,
        email : this.memEmail1,
        institute : this.memInsti1,
        qualification : this.memQual1
      },
      {
        username : this.memUsername2,
        name : this.memName2,
        email : this.memEmail2,
        institute : this.memInsti2,
        qualification : this.memQual2
      },
      {
        username : this.memUsername3,
        name : this.memName3,
        email : this.memEmail3,
        institute : this.memInsti3,
        qualification : this.memQual3
      },
      {
        username : this.memUsername4,
        name : this.memName4,
        email : this.memEmail4,
        institute : this.memInsti4,
        qualification : this.memQual4
      },
      {
        username : this.memUsername5,
        name : this.memName5,
        email : this.memEmail5,
        institute : this.memInsti5,
        qualification : this.memQual5
      }
    ],
    num : this.num,
    mentor_number : this.mentor_phone
  }).subscribe(txt => {
    this.response = JSON.stringify(txt['status']);
    if (this.response === '"Success"') {
      this.response = 'Registration Successful!';
    }
  });
}

  ngOnInit() {
  }


}
