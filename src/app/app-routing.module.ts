import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactsComponent } from './contacts/add-contacts/add-contacts.component';
import { ContactsModule } from './contacts/contacts.module';
import { EditContactsComponent } from './contacts/edit-contacts/edit-contacts.component';


const routes: Routes = [
  {    path:'add-contacts/:prodid',  component: AddContactsComponent  },
  {    path:'add-contacts/new/milind',  component: AddContactsComponent  },
  {    path:'edit-contacts', component: EditContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
