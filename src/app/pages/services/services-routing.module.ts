import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServicesComponent } from './services.component';

const routes: Routes = [
  {
     path: 'services',
     component: ServicesComponent
  },
  {
    path :'service/:slug',
    component : ServiceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
