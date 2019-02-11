import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import {RegisterComponent} from './register.component';
import { MaterialModule } from '../material-modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ValidationsService } from '../shared/validations.service';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    RegisterRoutingModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [RegisterComponent ],
  providers: [ ValidationsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class RegisterModule { }
