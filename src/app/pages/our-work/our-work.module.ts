import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginsModule }from '../../plugins/plugins.module'

import { OurWorkRoutingModule } from './our-work-routing.module';

import { OurWorkComponent }from './our-work.component';
import { AllworkComponent } from './allwork/allwork.component';


@NgModule({
  declarations: [
    OurWorkComponent,
    AllworkComponent
  ],
  imports: [
    CommonModule,
    OurWorkRoutingModule,
    PluginsModule
  ]
})
export class OurWorkModule { }
