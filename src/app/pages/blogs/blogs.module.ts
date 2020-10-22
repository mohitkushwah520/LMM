import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent }from './blogs.component';
import { BlogDetailComponent }from './blog-detail/blog-detail.component';
import  { PluginsModule }from '../../plugins/plugins.module';
import { RouterModule, Routes } from '@angular/router';

const BlogsRoutes : Routes = [
  {
    path : '',
    component : BlogsComponent
  },
  {
    path : ':id',
    component : BlogDetailComponent
  }
]
@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BlogsRoutes),
    PluginsModule
  ]
})
export class BlogsModule {
  constructor(){
    console.log('blogs module')
  }
}
