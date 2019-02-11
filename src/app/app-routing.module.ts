import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import {HomeComponent} from '../app/home/home.component';


const routes: Routes = [

   { path: '', component: HomeComponent },
   { path: 'register', loadChildren: './register/register.module#RegisterModule' }, // lazy loading  of register module
   { path: 'Details', loadChildren: './details/details.module#DetailsModule' }, // lazy loading  of register module

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ ],
  providers: [AuthService],
})
export class AppRoutingModule { }
