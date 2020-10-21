import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent }from './blogs.component';
import { BlogDetailComponent }from './blog-detail/blog-detail.component';
import  { PluginsModule }from '../../plugins/plugins.module';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    PluginsModule
  ]
})
export class BlogsModule { }
