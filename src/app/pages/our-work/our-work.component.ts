import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { OurworkService }from '../../services/ourwork.service';
import { Ourwork }from '../../modal/ourwork';
import { viewClassName } from '@angular/compiler';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent implements OnInit {

  @ViewChildren('video')video : QueryList<HTMLVideoElement> ;
  @ViewChild('cursor')cursor : ElementRef;
  @ViewChild('matTabGroup')matTabGroup : MatTabGroup;
  @ViewChild('mainVideo')mainVideo : ElementRef;
  public workdata :any;
  constructor(private ourwork : OurworkService) { }

  ngOnInit(): void {
    this.ourwork.workdetail().subscribe((data:Ourwork) => {
      this.workdata = data;
      console.log(data)
    })
  }
  ngAfterViewInit(): void{
   this.cursorAnimation();
   this.Cursor_lmm_arrow_link();
  //  window.setTimeout(()=>{
  //   document.querySelectorAll('.mat-tab-label')[0].classList.add('active')
  // },1000)
  }

  cursorAnimation(){
    this.cursor.nativeElement.style.pointerEvents = 'none';
    document.body.addEventListener('mousemove',(e)=>{
      this.cursor.nativeElement.style.top = e.clientY+'px';
      this.cursor.nativeElement.style.left = e.clientX+'px';
    })//cursor
  }
  Cursor_lmm_arrow_link(){
    window.setTimeout(()=>{
      var all = document.querySelectorAll('.lmm_arrow_btn');
      all.forEach((el)=>{
        el.addEventListener('mouseover',()=>{
          this.cursor.nativeElement.children[0].classList.add('active');
        })//hover
        el.addEventListener('mouseout',()=>{
          this.cursor.nativeElement.children[0].classList.remove('active');
        })
      })//forEach
    },1000)//timeout
  }
  M_CursorIn(){
    this.cursor.nativeElement.classList.add('stopVideo');
    this.cursor.nativeElement.classList.add('active');
  }
  M_CursorOut(){
    this.cursor.nativeElement.classList.remove('stopVideo');
    this.cursor.nativeElement.classList.remove('active');
  }
  videoOpen(){
    document.getElementById('mainVideo').style.display = 'block';
    this.mainVideo.nativeElement.play();
    this.mainVideo.nativeElement.muted = false;
    this.mainVideo.nativeElement.currentTime = 0;
  }
  videoClose(){
    document.getElementById('mainVideo').style.display = 'none';
    this.mainVideo.nativeElement.muted = true;
  }
  sound(){
    document.getElementById('sound').style.display='none';
    document.getElementById('mute').style.display ='block';
    this.mainVideo.nativeElement.muted = false;
  }
  mute(){
    document.getElementById('mute').style.display ='none';
    document.getElementById('sound').style.display='block';
    this.mainVideo.nativeElement.muted = true;
  }

}
