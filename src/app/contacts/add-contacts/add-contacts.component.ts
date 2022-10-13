import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
  prodid=0;
  milind=0
  constructor(private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params)=>{
      const interValue=params;
      this.prodid=interValue['prodid'];
      this.milind=interValue['milind']
    })
  }

  ngOnInit(): void {
  }

}
