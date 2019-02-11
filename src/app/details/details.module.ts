import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsRoutingModule } from './details-routing.module';
import {DetailsComponent} from './details.component';
import { MaterialModule } from '../material-modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ValidationsService } from '../shared/validations.service';



@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    DetailsRoutingModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [DetailsComponent ],
  providers: [ ValidationsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class DetailsModule { }