import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  @ViewChild('mainVideo') mainVideo : ElementRef;

  @ViewChild('title')title : ElementRef;
  @ViewChild('btn')btn : ElementRef;

  public our_recent : any;
  public servicesData : any;
  public clientData : any = [];

  constructor(private service : AllServicesService , private rendr : Renderer2) {}

  ngOnInit(): void {
      this.service.home_client().subscribe(
        data => {
          this.clientData = data;
          this.gsapAnimationOnLoad();
        },
        err => {console.log(err)}
      );//client

      var videos = document.querySelectorAll('#hero');
      videos.forEach((el)=>{
        this.video(el);
      })
  }

  video(videoElement){
    var el = videoElement as HTMLVideoElement;
    el.load();
    el.muted = true;
    el.play();
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
  videoOpen(){
    document.getElementById('mainVideo').style.display = 'block';
    var video = document.getElementById('mainVideo')
    $(video).stop().animate({'width':'100%'},100)

    this.mainVideo.nativeElement.play();
    this.mainVideo.nativeElement.muted = false;
    this.mainVideo.nativeElement.currentTime = 0;
  }
  videoClose(){
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
  onScroll(){
    var videos = document.querySelectorAll('#shortReel');
    videos.forEach((el)=>{
      this.rendr.setAttribute(el , 'src','assets/media/video/short_video.mp4')
      this.video(el);
    })
  }//onScroll
  workData(){
    this.service.home_ourRecent().subscribe(
      data => {
        this.our_recent = data;

      },
      err => {console.log(err)}
    )//ourRecent
  }//workData
  serviceData(){
    this.service.home_services().subscribe(
      data => {this.servicesData = data},
      err => {console.log(err)}
    );//service
  }
}
