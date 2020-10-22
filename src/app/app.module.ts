import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }from '@angular/forms';
import { PluginsModule }from './plugins/plugins.module';
import { InfiniteScrollModule }from 'ngx-infinite-scroll'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
// import { ServicesComponent } from './pages/services/services.component';
// import { OurWorkComponent } from './pages/our-work/our-work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule }from '@angular/material/dialog';
// import { BlogsComponent } from './pages/blogs/blogs.component';
import { LmmDialogComponent } from './material/lmm-dialog/lmm-dialog.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
// import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { OurProcessComponent } from './pages/our-process/our-process.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoudMobLabComponent } from './pages/loud-mob-lab/loud-mob-lab.component';
import { LmmScrolling } from './plugins/lmm-scrolling';
import { SocialSitesComponent } from './plugins/social-sites/social-sites.component';
import { MonkeyFooterComponent } from './shared/monkey-footer/monkey-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LmmDialogComponent,
    AboutUsComponent,
    OurProcessComponent,
    ContactComponent,
    LoudMobLabComponent,
    SocialSitesComponent,
    MonkeyFooterComponent
  ],
  entryComponents :[LmmDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    PluginsModule,
    InfiniteScrollModule
    // CaseStudyModule,
    // OurWorkModule,
    // ServicesModule
    // BlogsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports : []
})
export class AppModule {
  constructor(){
    console.log('app module')
  }
 }
