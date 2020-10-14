import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AllServicesService }from'../../services/all-services.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  @ViewChild('blogsbanner')blogsbanner : ElementRef;
  @ViewChild('cursor')cursor : ElementRef;
  public blogsData :any ;
  constructor( private blogsService : AllServicesService) { }

  ngOnInit(): void {
    this.blogsService.blogs().subscribe(data => {
      this.blogsData = data;
    },err => console.log(err))//blogservice
  }
  ngAfterViewInit(): void{
    this.blogsbanner.nativeElement.play = true;
    this.cursorAnimation();
  }
  L_CursorIn(){
    this.cursor.nativeElement.classList.add('active');
    this.cursor.nativeElement.classList.add('lottie');
  }
  L_CursorOut(){
    this.cursor.nativeElement.classList.remove('active');
    this.cursor.nativeElement.classList.remove('lottie');
  }
  cursorAnimation(){
    this.cursor.nativeElement.style.pointerEvents = 'none';
    document.body.addEventListener('mousemove',(e)=>{
      this.cursor.nativeElement.style.top = e.clientY+'px';
      this.cursor.nativeElement.style.left = e.clientX+'px';
    })//cursor
  }

}
