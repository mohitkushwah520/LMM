import { viewClassName } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
// import { create } from '@lottiefiles/lottie-interactivity';
import { OurworkService }from '../../services/ourwork.service';
import * as $ from 'jquery' ;

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit {


  @ViewChild('bannerVideo')bannerVideo : ElementRef;
  // @ViewChild('cursor')cursor : ElementRef;
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
  }

  ngAfterViewInit(): void{
    this.bannerVideo.nativeElement.muted = true;
    this.bannerVideo.nativeElement.play = true;
  }

  scroll(){
    var viewHeight = window.innerHeight;
    $("body,html").stop().animate({"scrollTop": viewHeight+'px'},1500)
  }
}
