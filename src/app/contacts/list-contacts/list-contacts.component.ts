import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  fname="";
  lname="";
  contact=0;
  constructor(private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params=>{
      this.fname=params['fname'];
      this.lname=params['lname'];
      this.contact=params['contact'];
    })
  }

  ngOnInit(): void {
  }

}
