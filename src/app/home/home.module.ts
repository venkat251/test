import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material-modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { AuthService } from '../auth.service';
import { ValidationsService } from '../shared/validations.service';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
  ],
  providers: [ AuthService,  ValidationsService ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomeModule { }
