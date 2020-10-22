import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginsModule }from '../../plugins/plugins.module'

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent }from './services.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { RouterModule, Routes } from '@angular/router';



const serviceRoutes : Routes = [
  {path : '' , component : ServicesComponent},
  {path : ':slug' , component : ServiceDetailComponent}
]

@NgModule({
  declarations: [
    ServicesComponent,
    ServiceDetailComponent
  ],
  imports: [
    CommonModule,
    // ServicesRoutingModule,
    RouterModule.forChild(serviceRoutes),
    PluginsModule
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ServicesModule {
  constructor(){
    console.log('services module')
  }
 }
