import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseStudyComponent } from './case-study.component';
import { BytbondComponent } from './detail/bytbond/bytbond.component';
import { CocaliteComponent } from './detail/cocalite/cocalite.component';
import { EyehopComponent } from './detail/eyehop/eyehop.component';
import { MilkpaintComponent } from './detail/milkpaint/milkpaint.component';
import { MorningkickComponent } from './detail/morningkick/morningkick.component';
import { MymeeComponent } from './detail/mymee/mymee.component';
import { PersonaComponent } from './detail/persona/persona.component';
import { RapidaleComponent } from './detail/rapidale/rapidale.component';
import { UrbanpawsComponent } from './detail/urbanpaws/urbanpaws.component';

const routes: Routes = [
  {
    path : 'caseStudy',
    component : CaseStudyComponent
  },
  {
    path : 'caseStudy/persona',
    component : PersonaComponent
  },
  {
    path : 'caseStudy/bytbond',
    component : BytbondComponent
  },
  {
    path : 'caseStudy/cocalite',
    component : CocaliteComponent
  },
  {
    path : 'caseStudy/eyehop',
    component : EyehopComponent
  },
  {
    path : 'caseStudy/milkpaint',
    component : MilkpaintComponent
  },
  {
    path : 'caseStudy/morningkick',
    component : MorningkickComponent
  },
  {
    path : 'caseStudy/mymee',
    component : MymeeComponent
  },
  {
    path : 'caseStudy/rapidale',
    component : RapidaleComponent
  },
  {
    path : 'caseStudy/urbanpaws',
    component : UrbanpawsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseStudyRoutingModule { }
