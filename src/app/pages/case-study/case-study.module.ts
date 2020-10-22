import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseStudyRoutingModule } from './case-study-routing.module';
import { PersonaComponent } from './detail/persona/persona.component';
import { CocaliteComponent } from './detail/cocalite/cocalite.component';
import { BytbondComponent } from './detail/bytbond/bytbond.component';
import { MymeeComponent } from './detail/mymee/mymee.component';
import { RapidaleComponent } from './detail/rapidale/rapidale.component';
import { EyehopComponent } from './detail/eyehop/eyehop.component';
import { MilkpaintComponent } from './detail/milkpaint/milkpaint.component';
import { UrbanpawsComponent } from './detail/urbanpaws/urbanpaws.component';
import { MorningkickComponent } from './detail/morningkick/morningkick.component';
import { CaseStudyComponent }from './case-study.component';
import { PluginsModule }from '../../plugins/plugins.module';
import { RouterModule, Routes } from '@angular/router';



const caseStudyRoutes : Routes = [
  {path : '',component : CaseStudyComponent},
  {path : ':slug',component : EyehopComponent}
]


@NgModule({
  declarations: [
    CaseStudyComponent,
    PersonaComponent,
    CocaliteComponent,
    BytbondComponent,
    MymeeComponent,
    RapidaleComponent,
    EyehopComponent,
    MilkpaintComponent,
    UrbanpawsComponent,
    MorningkickComponent
  ],
  imports: [
    CommonModule,
    // CaseStudyRoutingModule,
    RouterModule.forChild(caseStudyRoutes),
    PluginsModule
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class CaseStudyModule {
  constructor(){
    console.log('casestudy module')
  }
 }
