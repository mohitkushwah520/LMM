import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule }from '@angular/material/dialog';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { LmmDialogComponent } from './material/lmm-dialog/lmm-dialog.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { OurProcessComponent } from './pages/our-process/our-process.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoudMobLabComponent } from './pages/loud-mob-lab/loud-mob-lab.component';
import { LmmScrolling } from './plugins/lmm-scrolling';
import { RailTextComponent } from './plugins/rail-text/rail-text.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { LmmButtonComponent } from './plugins/lmm-button/lmm-button.component';
import { SocialSitesComponent } from './plugins/social-sites/social-sites.component';
import { MonkeyFooterComponent } from './shared/monkey-footer/monkey-footer.component';
import { CaseStudyModule }from './pages/case-study/case-study.module';
import { VideoComponent } from './plugins/video/video.component';
import { ScrolltideComponent } from './plugins/scrolltide/scrolltide.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    OurWorkComponent,
    BlogsComponent,
    LmmDialogComponent,
    AboutUsComponent,
    CaseStudyComponent,
    OurProcessComponent,
    ContactComponent,
    LoudMobLabComponent,
    RailTextComponent,
    ServiceDetailComponent,
    BlogDetailComponent,
    LmmButtonComponent,
    SocialSitesComponent,
    MonkeyFooterComponent,
    VideoComponent,
    ScrolltideComponent
  ],
  entryComponents :[LmmDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CaseStudyModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
