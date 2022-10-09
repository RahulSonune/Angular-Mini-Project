import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Career-Infotech';//title of the html page

  variable="blue";//ngStyle variable for bg-color
  variable2="white";//ngStyle variable for color
  variable3="blue";//variable for ngStyle using condition
  
  success_msg=true;// If variable

  modVar="";

  capital="this is uppercase";//uppercase built in pipe
  small="THIS IS LOWERCASE";//lowercase built in pipe
  DateEx=Date.now();
  JSONex={'username':'rahul', 'email':'rahulsonune112233@gmail.com', 'mobileno':9764877469};
  currencyEx=12345;
  percentage=109;

  day=7;//Switch case variable
  months=15;

  number=2;
  contact=[//array object used in for loop
    {
      "id":1,
      "firstname":"Rahul",
      "lastname":"Sonune",
      "contact":9764877469
    },
    {
      "id":2,
      "firstname":"Vaibhav",
      "lastname":"Chandrashekhar",
      "contact":9764877469
    },
    {
      "id":3,
      "firstname":"Santosh",
      "lastname":"Turerao",
      "contact":9764877469
    },
    {
      "id":4,
      "firstname":"Milind",
      "lastname":"Turereao",
      "contact":9764877469
    }
  ]

}
