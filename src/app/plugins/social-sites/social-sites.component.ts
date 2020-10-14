import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-social-sites',
  templateUrl: './social-sites.component.html',
  styleUrls: ['./social-sites.component.css']
})
export class SocialSitesComponent implements OnInit {
  @ViewChild('socialLeft')socialLeft : ElementRef;
  @ViewChild('socialRight')socialRight : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    this.gsapAnimationOnLoad();
  }
  gsapAnimationOnLoad(){
    var gsapContainerLeft = [this.socialLeft.nativeElement]
    var gsapContainerRight = [this.socialRight.nativeElement]
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
}
