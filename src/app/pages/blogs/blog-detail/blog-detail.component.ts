import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { AllServicesService }from '../../../services/all-services.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  // @ViewChild('cursor')cursor : ElementRef;
  public id ;
  public blogDetail : any = [];
  constructor(private router : ActivatedRoute , private service : AllServicesService) { }

  ngOnInit(): void {
    // window.scroll(0,0);
    this.router.paramMap.subscribe(result =>{
      this.id = result.get('id');
      this.service.blogs().subscribe(data => {
        window.scroll(0,0);
        this.blogDetail = data;
      })
    })
  }

  ngAfterViewInit(): void{
    // this.cursorAnimation();
  }

  // cursorAnimation(){
  //   this.cursor.nativeElement.style.pointerEvents = 'none';
  //   document.body.addEventListener('mousemove',(e)=>{
  //     this.cursor.nativeElement.style.top = e.clientY+'px';
  //     this.cursor.nativeElement.style.left = e.clientX+'px';
  //   })//cursor
  // }

  // L_CursorIn(){
  //   this.cursor.nativeElement.classList.add('active');
  //   this.cursor.nativeElement.classList.add('lottie');
  // }
  // L_CursorOut(){
  //   this.cursor.nativeElement.classList.remove('active');
  //   this.cursor.nativeElement.classList.remove('lottie');
  // }

}
