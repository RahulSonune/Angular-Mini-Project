import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AddContactsComponent } from './contacts/add-contacts/add-contacts.component';
import { EditContactsComponent } from './contacts/edit-contacts/edit-contacts.component';
import { ListContactsComponent } from './contacts/list-contacts/list-contacts.component';
import { SuperAdminGuard } from './super-admin.guard';


const routes: Routes = [
  {    path:'add-contacts/:prodid',  component: AddContactsComponent  },
  {    path:'add-contacts/new/milind',  component: AddContactsComponent  },
  {    path:'edit-contacts', component: EditContactsComponent },
  {    path:'edit', component: EditContactsComponent },
  
  { 
    path:'',
    redirectTo: 'add-contacts',
    pathMatch:'full'
  },
  {
    path:'add-contacts',
    component: AddContactsComponent
  },
  {
    path:'list-contacts',
    component:ListContactsComponent,
    canActivate: [AdminGuard,AuthGuard]
  },
  {
    path: 'admin',    
    canActivate: [SuperAdminGuard],
    children:[
      {
        path:'',
        component: AdminComponent,
      },
      {
        path:'',
        canActivateChild:[AdminAccessGuard],
        children:[
          { path:'manage',component:AdminManageComponent },
          { path:'edit',component:AdminEditComponent },
          { path:'delete',component:AdminDeleteComponent }
        ]
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
