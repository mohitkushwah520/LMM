import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoudMobLabComponent } from './pages/loud-mob-lab/loud-mob-lab.component';
import { OurProcessComponent } from './pages/our-process/our-process.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { ServicesComponent } from './pages/services/services.component';
import { LmmButtonComponent } from './plugins/lmm-button/lmm-button.component';
import { RailTextComponent } from './plugins/rail-text/rail-text.component';
import { ScrolltideComponent } from './plugins/scrolltide/scrolltide.component';
import { VideoComponent } from './plugins/video/video.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  }
  // {
  //   path : 'services',
  //   component : ServicesComponent
  // },
  // {
  //   path : 'ourwork',
  //   component : OurWorkComponent
  // },
  // {
  //   path : 'blogs',
  //   component : BlogsComponent
  // },
  // {
  //   path : 'aboutUs',
  //   component : AboutUsComponent
  // },
  // {
  //   path : 'ourProcess',
  //   component : OurProcessComponent
  // },
  // {
  //   path : 'contact',
  //   component : ContactComponent
  // },
  // {
  //   path : 'loudMobLab',
  //   component : LoudMobLabComponent
  // },
  // {
  //   path : 'service/:slug',
  //   component : ServiceDetailComponent
  // },
  // {
  //   path : 'blog/:id',
  //   component : BlogDetailComponent
  // },
  // {
  //   path : 'plugins',
  //   component : VideoComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
