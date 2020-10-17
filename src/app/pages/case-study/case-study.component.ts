import { viewClassName } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
// import { create } from '@lottiefiles/lottie-interactivity';
import { OurworkService }from '../../services/ourwork.service';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit {


  @ViewChild('bannerVideo')bannerVideo : ElementRef;
  @ViewChild('cursor')cursor : ElementRef;
  public caseStudy = [
    {
      id : 'caseStudy1',
      title : 'cocoalite',
      href : 'cocoalite',
      lottie_src : "assets/media/lottie_files/caseStudy/lottie_cocoalite.json",
      img_src : "assets/media/images/caseStudy/lottie_cocoalite_cover.png"
    },
    {
      id : 'caseStudy2',
      title : 'persona',
      href : 'persona',
      lottie_src : "assets/media/lottie_files/caseStudy/lotti_persona.json",
      img_src : "assets/media/images/caseStudy/lottie_persona_cover.png"
    },
    {
      id : 'caseStudy3',
      title : 'bytbond',
      href : 'bytbond',
      lottie_src : 'https://assets3.lottiefiles.com/packages/lf20_8izyldes.json',
      img_src:"assets/media/images/caseStudy/clone.jpg"
    },

    {
      id : 'caseStudy4',
      title : 'mymee',
      href : 'mymee',
      lottie_src : 'https://assets3.lottiefiles.com/packages/lf20_8izyldes.json',
      img_src:"assets/media/images/caseStudy/clone.jpg"
    },
    {
      id : 'caseStudy5',
      title : 'rapidale',
      href : 'rapidale',
      lottie_src : 'https://assets3.lottiefiles.com/packages/lf20_8izyldes.json',
      img_src:"assets/media/images/caseStudy/clone.jpg"
    },

    {
      id : 'caseStudy6',
      title : 'eye hop',
      href : 'eyehop',
      lottie_src : "assets/media/lottie_files/caseStudy/lotti_eyehop.json",
      img_src : "assets/media/images/caseStudy/lottie_eyehop_cover.png"
    },
    {
      id : 'caseStudy7',
      title : 'milk paint',
      href : 'milkpaint',
      lottie_src : 'https://assets3.lottiefiles.com/packages/lf20_8izyldes.json',
      img_src:"assets/media/images/caseStudy/clone.jpg"
    },
    {
      id : 'caseStudy8',
      title : 'urbanpaws',
      href : 'urbanpaws',
      lottie_src : 'https://assets3.lottiefiles.com/packages/lf20_8izyldes.json',
      img_src:"assets/media/images/caseStudy/clone.jpg"
    },
    {
      id : 'caseStudy9',
      title : 'morning kick',
      href : 'morningkick',
      lottie_src : 'https://assets3.lottiefiles.com/packages/lf20_8izyldes.json',
      img_src:"assets/media/images/caseStudy/clone.jpg"
    }
  ]

  constructor(private serv : OurworkService) { }
  ngOnInit(): void {
    // this.serv.ourprocess().subscribe((data)=>{
    //   // this.footerVideo.nativeElement.play();
    //   create({
    //     mode: 'scroll',
    //     player: '#caseStudy1',
    //     actions: [
    //       {
    //         visibility:[0,0.1],
    //         type: 'stop',
    //         frames: [0]
    //       },
    //       {
    //         visibility:[0.1,1],
    //         type: 'seek',
    //         frames: [0],
    //       }
    //     ],
    //   });
    //   create({
    //     mode: 'scroll',
    //     player: '#caseStudy2',
    //     actions: [
    //       {
    //         visibility:[0,0.1],
    //         type: 'stop',
    //         frames: [0]
    //       },
    //       {
    //         visibility:[0.1,1],
    //         type: 'seek',
    //         frames: [0],
    //       }
    //     ],
    //   });
    //   create({
    //     mode: 'scroll',
    //     player: '#caseStudy3',
    //     actions: [
    //       {
    //         visibility:[0,0.1],
    //         type: 'stop',
    //         frames: [0]
    //       },
    //       {
    //         visibility:[0.1,1],
    //         type: 'seek',
    //         frames: [0],
    //       }
    //     ],
    //   });
    //   create({
    //     mode: 'scroll',
    //     player: '#caseStudy4',
    //     actions: [
    //       {
    //         visibility:[0,0.1],
    //         type: 'stop',
    //         frames: [0]
    //       },
    //       {
    //         visibility:[0.1,1],
    //         type: 'seek',
    //         frames: [0],
    //       }
    //     ],
    //   });
    //   create({
    //     mode: 'scroll',
    //     player: '#caseStudy5',
    //     actions: [
    //       {
    //         visibility:[0,0.1],
    //         type: 'stop',
    //         frames: [0]
    //       },
    //       {
    //         visibility:[0.1,1],
    //         type: 'seek',
    //         frames: [0],
    //       }
    //     ],
    //   });
    //   create({
    //     mode: 'scroll',
    //     player: '#caseStudy6',
    //     actions: [
    //       {
    //         visibility:[0,0.1],
    //         type: 'stop',
    //         frames: [0]
    //       },
    //       {
    //         visibility:[0.1,1],
    //         type: 'seek',
    //         frames: [0],
    //       }
    //     ],
    //   });
    //   create({
    //     mode: 'scroll',
    //     player: '#caseStudy7',
    //     actions: [
    //       {
    //         visibility:[0,0.1],
    //         type: 'stop',
    //         frames: [0]
    //       },
    //       {
    //         visibility:[0.1,1],
    //         type: 'seek',
    //         frames: [0],
    //       }
    //     ],
    //   });
    //   create({
    //     mode: 'scroll',
    //     player: '#caseStudy8',
    //     actions: [
    //       {
    //         visibility:[0,0.1],
    //         type: 'stop',
    //         frames: [0]
    //       },
    //       {
    //         visibility:[0.1,1],
    //         type: 'seek',
    //         frames: [0],
    //       }
    //     ],
    //   });
    //   create({
    //     mode: 'scroll',
    //     player: '#caseStudy9',
    //     actions: [
    //       {
    //         visibility:[0,0.1],
    //         type: 'stop',
    //         frames: [0]
    //       },
    //       {
    //         visibility:[0.1,1],
    //         type: 'seek',
    //         frames: [0],
    //       }
    //     ],
    //   });

    // })

  }

  ngAfterViewInit(): void{
    this.bannerVideo.nativeElement.muted = true;
    this.bannerVideo.nativeElement.play = true;
    this.cursorAnimation();
  }
  cursorAnimation(){
    this.cursor.nativeElement.style.pointerEvents = 'none';
    document.body.addEventListener('mousemove',(e)=>{
      this.cursor.nativeElement.style.top = e.clientY+'px';
      this.cursor.nativeElement.style.left = e.clientX+'px';
    })
  }
  L_CursorIn(){
    this.cursor.nativeElement.classList.add('active');
    this.cursor.nativeElement.classList.add('lottie');
  }
  L_CursorOut(){
    this.cursor.nativeElement.classList.remove('active');
    this.cursor.nativeElement.classList.remove('lottie');
  }

  scroll(){
    // window.pageYOffset('90')
  }
}
