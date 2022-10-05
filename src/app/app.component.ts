import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  success_msg=true;

  contact=[
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
