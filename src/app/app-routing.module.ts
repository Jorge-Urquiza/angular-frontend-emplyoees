import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';


const routes : Routes = [
  {
    path: 'employees',
    component : ListEmployeeComponent
  },
  {
    path: 'register',
    component : CreateEmployeeComponent
  },
  {
    path: 'show/:id',
    component : ShowEmployeeComponent
  },
  {
    path: 'edit/:id',
    component : EditEmployeeComponent
  },
  {
    path: '**',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
