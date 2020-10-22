import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent }from './video/video.component';
import { RailTextComponent }from './rail-text/rail-text.component';
import { ScrolltideComponent }from './scrolltide/scrolltide.component';
import { LottieComponent }from './lottie/lottie.component';
import { LmmButtonComponent }from './lmm-button/lmm-button.component';
import { ClientsAPIComponent } from './clients-api/clients-api.component'



@NgModule({
  declarations: [
    VideoComponent,
    RailTextComponent,
    ScrolltideComponent,
    LottieComponent,
    LmmButtonComponent,
    ClientsAPIComponent
  ],
  imports: [
    CommonModule
  ],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports : [
    VideoComponent,
    RailTextComponent,
    ScrolltideComponent,
    LottieComponent,
    LmmButtonComponent
  ]
})
export class PluginsModule {
  constructor(){
    console.log('plugins module')
  }
}
