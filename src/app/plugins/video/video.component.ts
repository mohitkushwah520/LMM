import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { windowWhen } from 'rxjs/operators';
import { AllServicesService }from '../../services/all-services.service';
import * as $ from 'jquery' ;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private render : Renderer2) { }

  ngOnInit(): void {
    var mouse = document.getElementById('mouse');
    var span = document.querySelector('.mouse span')
    this.render.removeClass(mouse , 'active');
      this.render.removeClass(span , 'active');
    window.addEventListener('mousemove',(e)=>{

      var smallVideo =  document.querySelector('.short_video video');
      var mainvideo = document.querySelector('.main_video video');
      var linkArrow = document.querySelectorAll('.lmm_arrow_btn');
      var arrow_cursor = document.querySelectorAll('.arrow_cursor');
      var circlemouse = document.querySelectorAll('.circle_hover');


      var x = e.clientX;
      var y = e.clientY;

      this.render.setStyle(mouse , 'left',x+'px');
      this.render.setStyle(mouse , 'top',y+'px');

      if(smallVideo == null){
      }else{
        smallVideo.addEventListener('mouseover',()=>{
              this.render.addClass(mouse , 'active');
              this.render.addClass(mouse , 'shortVideo');
            })
            smallVideo.addEventListener('mouseout',()=>{
              this.render.removeClass(mouse , 'active');
              this.render.removeClass(mouse , 'shortVideo');
            })
      }

      if(mainvideo == null){
      }else{
          mainvideo.addEventListener('mouseover',()=>{
            this.render.addClass(mouse , 'active');
            this.render.addClass(mouse , 'mainvideo');
          })
          mainvideo.addEventListener('mouseout',()=>{
            this.render.removeClass(mouse , 'active');
            this.render.removeClass(mouse , 'mainvideo');
          })
      }

      if(linkArrow === null){
      }else{
        linkArrow.forEach((el)=>{
            el.addEventListener('mouseover',()=>{
              this.render.addClass(span , 'active')
            })
            el.addEventListener('mouseout',()=>{
              this.render.removeClass(span , 'active')
            })
            el.addEventListener('click',()=>{
              this.render.removeClass(span , 'active')
            })
          })
      }

      if(arrow_cursor == null){
      }else{
        arrow_cursor.forEach((el)=>{
          el.addEventListener('mouseover',()=>{
            // $('#mouse').stop().animate({'width':'100px','height':'100px'},400)
            this.render.addClass(mouse,'active');
            this.render.addClass(mouse,'arrow_cursor');
          })
          el.addEventListener('mouseout',()=>{
            // $('#mouse').stop().animate({'width':'30px','height':'30px'},400)
            this.render.removeClass(mouse,'active');
            this.render.removeClass(mouse,'arrow_cursor');
          })
          el.addEventListener('click',()=>{
            this.render.removeClass(mouse,'active');
            this.render.removeClass(mouse,'arrow_cursor');
          })
        })
      }

      if(circlemouse == null){
      }else{
        circlemouse.forEach((el)=>{
          el.addEventListener('mouseover',()=>{
            this.render.addClass(span , 'active')
          })
          el.addEventListener('mouseout',()=>{
            this.render.removeClass(span , 'active')
          })
          el.addEventListener('click',()=>{
            this.render.removeClass(span , 'active')
          })
        })
      }

    //



    //
    })
  }
}
