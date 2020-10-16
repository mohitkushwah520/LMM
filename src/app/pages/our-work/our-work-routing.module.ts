import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllworkComponent } from './allwork/allwork.component';
import { OurWorkComponent } from './our-work.component';

const routes: Routes = [
  {
    path : 'ourwork',
    component : OurWorkComponent,
    children : [
      {path : ':slug',component : AllworkComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurWorkRoutingModule { }
