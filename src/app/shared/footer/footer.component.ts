import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router }from '@angular/router'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  @ViewChild('cursor')cursor : ElementRef;
  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
      this.cursorAnimation();
  }
  cursorAnimation(){
    this.cursor.nativeElement.style.pointerEvents = 'none';
    document.body.addEventListener('mousemove',(e)=>{
      this.cursor.nativeElement.style.top = e.clientY+'px';
      this.cursor.nativeElement.style.left = e.clientX+'px';
    })//cursor
  }
}
