import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.css']
})
export class EditContactsComponent implements OnInit {
  contactList=[
    {      contactId :1, firstname : "Rahul", lastname : "Sonune"    },
    {      contactId :2, firstname : "vaibhav", lastname : "Chandrashekhar"    },
    {      contactId :3, firstname : "Milind", lastname : "Turerao"    },
    {      contactId :4, firstname : "Santosh", lastname : "Turerao"    },
    {      contactId :5, firstname : "Prajakta", lastname : "Chandrashekhar"    },
    {      contactId :6, firstname : "Rupali", lastname : "Turerao"    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
