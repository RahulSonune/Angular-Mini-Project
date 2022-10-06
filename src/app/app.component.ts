import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Career-Infotech';//title of the html page

  success_msg=true;// If variable

  day=7;//Switch case variable

  contact=[//array object used in for loop
    {
      "firstname":"Rahul",
      "lastname":"Sonune",
      "contact":9764877469
    },
    {
      "firstname":"Vaibhav",
      "lastname":"Chandrashekhar",
      "contact":9764877469
    },
    {
      "firstname":"Santosh",
      "lastname":"Turerao",
      "contact":9764877469
    },
    {
      "firstname":"Milind",
      "lastname":"Turereao",
      "contact":9764877469
    }
  ]

}
