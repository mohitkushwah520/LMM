import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input()src : string;

  @ViewChild('video')video : ElementRef<HTMLVideoElement>;
  constructor() { }

  public red = 'primary';
  ngOnInit(): void {}
  ngAfterViewInit(): void{
    var time = 0.15;
    let scrollPosition = window.scrollY;
    console.log(scrollPosition)
   window.addEventListener('scroll',()=>{
    var video = this.video.nativeElement;
    var top = video.getBoundingClientRect().top
    var duration = video.duration;
    var deviceHeight = window.innerHeight;
    var deviceWidth = window.innerWidth;
    let scrolling = window.scrollY;


    if((-(top - (deviceHeight*0.95)) >=0 ) && ((top) >= (-video.clientHeight*0.40))){
      if(scrollPosition <= scrolling){
        var duration = (time += 0.025);
        video.currentTime = duration;
        return scrollPosition = window.scrollY , time;
      }else{
        var duration = (time -= 0.025);
        video.currentTime = duration;
        return scrollPosition = window.scrollY , time;
      }
    }

    // if(scrollPosition <= scrolling){

    //   if((-(top - (deviceHeight*0.95)) >=0 ) && ((top) >= (-video.clientHeight*0.40))){
    //     var duration = (time += 0.025);
    //    video.currentTime = duration;
    //    console.log(duration+'hiii')
    //    return time

    //   }
    //   // console.log('hii')
    //   return scrollPosition = window.scrollY;

    // }else{
    //   if((-(top - (deviceHeight*0.95)) >=0 ) && ((top) >= (-video.clientHeight*0.40))){
    //     var duration = (time -= 0.025);
    //    video.currentTime = duration;
    //   //  console.log(duration+'bye')
    //    return time;

    //   }
    //   // console.lo/g('bye')
    //   return scrollPosition = window.scrollY;
    // }






    // console.log(window.scrollY)

   })
  // var frameNumber = 0;
  // var playbackConst = 200;
  // var vid = this.video.nativeElement;
  // function scrollPlay(){
  //   var frameNumber  = window.pageYOffset/playbackConst;
  //   console.log(window.pageYOffset)
  //   vid.currentTime  = frameNumber;
  //   window.requestAnimationFrame(scrollPlay);
  // }


  }
}
