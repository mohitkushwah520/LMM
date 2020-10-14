import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [PersonaComponent, CocaliteComponent, BytbondComponent, MymeeComponent, RapidaleComponent, EyehopComponent, MilkpaintComponent, UrbanpawsComponent, MorningkickComponent],
  imports: [
    CommonModule,
    CaseStudyRoutingModule
  ]
})
export class CaseStudyModule { }
