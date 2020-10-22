import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginsModule }from '../../plugins/plugins.module'

import { OurWorkRoutingModule } from './our-work-routing.module';

import { OurWorkComponent }from './our-work.component';
import { AllworkComponent } from './allwork/allwork.component';
import { RouterModule, Routes } from '@angular/router';


const ourworkConst : Routes = [
  {
    path : '',
    component : OurWorkComponent,
    children : [
      {path : ':slug',component : AllworkComponent}
    ]
  }
]

@NgModule({
  declarations: [
    OurWorkComponent,
    AllworkComponent
  ],
  imports: [
    CommonModule,
    // OurWorkRoutingModule,
    RouterModule.forChild(ourworkConst),
    PluginsModule
  ]
})
export class OurWorkModule {
  constructor(){
    console.log('work module')
  }
}
