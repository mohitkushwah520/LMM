import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { create } from '@lottiefiles/lottie-interactivity';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AllServicesService }from '../../services/all-services.service';
import * as $ from 'jquery' ;

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  @ViewChild('herovideo') herovideo : ElementRef;
  @ViewChild('mainVideo') mainVideo : ElementRef;
  @ViewChild('shortReel') shortReel : ElementRef;
  @ViewChild('title')title : ElementRef;
  @ViewChild('btn')btn : ElementRef;

  // @ViewChild('cursor')cursor : ElementRef;


  public progress = 1;
  public our_recent : any;
  public servicesData : any;
  public clientData : any = [];

  constructor(private service : AllServicesService , private rendr : Renderer2) {}

  ngOnInit(): void {
      this.service.home_ourRecent().subscribe(
        data => {
          this.our_recent = data;
          // window.setTimeout(this.lot,1000);
          this.gsapAnimationOnLoad();
        },
        err => {console.log(err)}
      )//ourRecent
      this.service.home_services().subscribe(
        data => {this.servicesData = data},
        err => {console.log(err)}
      );//service
      this.service.home_client().subscribe(
        data => {this.clientData = data},
        err => {console.log(err)}
      );//client
    }

  ngAfterViewInit(): void{
    // this.gsapAnimationOnLoad();
    // this.gsapScrollTrigger();
    this.video();
    // window.addEventListener('load',this.lot);
    // this.cursorAnimation();
    // this.Cursor_lmm_arrow_link();
   }//afterVierInit

  // lot(){
    // create({
    //   mode: 'scroll',
    //   player: '#lottieOne',
    //   actions: [
    //     {
    //       visibility:[0,0.1],
    //       type: 'stop',
    //       frames: [0]
    //     },
    //     {
    //       visibility:[0.1,1],
    //       type: 'seek',
    //       frames: [0],
    //     }
    //   ],
    // });
    // create({
    //   mode: 'scroll',
    //   player: '#lottieTwo',
    //   actions: [
    //     {
    //       visibility:[0,0.1],
    //       type: 'stop',
    //       frames: [0]
    //     },
    //     {
    //       visibility:[0.1,1],
    //       type: 'seek',
    //       frames: [0],
    //     }
    //   ],
    // });
    // create({
    //   mode: 'scroll',
    //   player: '#lottieThree',
    //   actions: [
    //     {
    //       visibility:[0,0.1],
    //       type: 'stop',
    //       frames: [0]
    //     },
    //     {
    //       visibility:[0.1,1],
    //       type: 'seek',
    //       frames: [0],
    //     }
    //   ],
    // });
  //   create({
  //     mode: 'scroll',
  //     player: '#LottieDesign',
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
  //     player: '#LottieBrand',
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
  //     player: '#LottieMarketing',
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
  //     player: '#LottieWeb',
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
  // }
  video(){
    this.herovideo.nativeElement.load();
    this.herovideo.nativeElement.play = true;
    window.setTimeout(()=>{
      this.herovideo.nativeElement.play = true;
    },1000)
    this.shortReel.nativeElement.muted = true;
  }
  gsapAnimationOnLoad(){
    var gsapContainerLeft = [this.title.nativeElement]
    var gsapContainerRight = [this.btn.nativeElement]
    gsap.from( gsapContainerLeft, {
      duration : 1,
      opacity:0,
      x:-20,
      delay :2
    })
    gsap.from( gsapContainerRight, {
      duration : 1,
      opacity:0,
      x:20,
      delay :2
    })
  }
  // gsapScrollTrigger(){
    // gsap.to(this.services.nativeElement , {
    //   scrollTrigger : {
    //     trigger : this.services.nativeElement,
    //     start : 'center bottom',
    //     end : 'bottom top',
    //     scrub : true,
    //   },
    //   x : 680,
    //   ease : 'linear',
    // });//services
    // gsap.to(this.showreel.nativeElement , {
    //   scrollTrigger : {
    //     trigger : this.showreel.nativeElement,
    //     start : 'top 750',
    //     end : 'bottom top',
    //     scrub : true,
    //   },
    //   x : 1100,
    //   ease : 'linear',
    // });//showreel
    // gsap.to(this.skating.nativeElement , {
    //   scrollTrigger : {
    //     trigger : this.skating.nativeElement,
    //     start : 'top bottom',
    //     end : 'bottom top',
    //     scrub : true,
    //   },
    //   x : 2000,
    //   ease : 'linear',
    // });//services
  // }
  videoOpen(){
    document.getElementById('mainVideo').style.display = 'block';
    var video = document.getElementById('mainVideo')
    // this.rendr.setStyle(video , 'width','100%')
    $(video).stop().animate({'width':'100%'},100)

    this.mainVideo.nativeElement.play();
    this.mainVideo.nativeElement.muted = false;
    this.mainVideo.nativeElement.currentTime = 0;
  }
  videoClose(){
    // document.getElementById('mainVideo').style.display = 'none';
    var video = document.getElementById('mainVideo');
    $(video).stop().animate({'width' : '0%','display':'none'},100)
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
