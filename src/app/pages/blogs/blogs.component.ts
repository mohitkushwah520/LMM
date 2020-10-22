import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AllServicesService }from'../../services/all-services.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  @ViewChild('blogsbanner')blogsbanner : ElementRef;
  public blogsData :any ;
  constructor( private blogsService : AllServicesService) { }

  ngOnInit(): void {
    this.blogsService.blogs().subscribe(data => {
      this.blogsData = data;
    },err => console.log(err))//blogservice
  }
  ngAfterViewInit(): void{
    this.blogsbanner.nativeElement.play = true;
  }

}
