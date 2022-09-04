import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'',
  component: AppComponent,
 children: [
  { path: '', component: LoginComponent },

  ]
}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],//forChild change
  exports: [RouterModule]
})
export class AuthRoutingModule { }
