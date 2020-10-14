import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rail-text',
  templateUrl: './rail-text.component.html',
  styleUrls: ['./rail-text.component.css']
})
export class RailTextComponent implements OnInit {

  @Input() text : string ;

  @ViewChild('plugin') plugin : ElementRef;
  @ViewChild('container') container : ElementRef;
  @ViewChild('content') content : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{

    let progress = 1;
    let speed = 0.9;
    let scrollPosition = window.scrollY;
    let lastScrollPos = 0;
    let timer;

    for(let i = 0;i<=2;i++){
      let cloneElement = this.content.nativeElement.children[0].cloneNode(true);
      this.content.nativeElement.appendChild(cloneElement);
    }

    let elementWidth = this.content.nativeElement.children[0].clientWidth ;//-70
    this.container.nativeElement.style.transform = 'translateX(-' + elementWidth + 'px)';
    let content = this.content.nativeElement
    function animation(){
      progress = progress + speed;
        if(progress >= elementWidth){
          progress = 0;
        }
        content.style.transform = 'translateX(' + progress + 'px)';
        window.requestAnimationFrame(animation)
    }//animation
    animation();
    window.addEventListener('scroll',()=>{
      let scrolling = window.scrollY;
      if(scrollPosition <= scrolling){
        scrollforward();
        return scrollPosition = window.scrollY;
      }else{
        scrollReverse();
        return scrollPosition = window.scrollY;
      }
    })
    function handleSpeedClear() {
      speed = 0.9;
    }
    function scrollforward(){
      const maxScrollValue = 12;
          const newScrollPos = window.scrollY;
          let scrollValue = newScrollPos - lastScrollPos;
          if(scrollValue > maxScrollValue) scrollValue = maxScrollValue;
          else if(scrollValue < -maxScrollValue) scrollValue = -maxScrollValue;
          speed = scrollValue;
          clearTimeout(timer);
          timer = setTimeout(handleSpeedClear, 10);
    }
    function scrollReverse(){
      const maxScrollValue = -12;
          const newScrollPos = window.scrollY;
          let scrollValue = newScrollPos - lastScrollPos;
          if(scrollValue > maxScrollValue) scrollValue = maxScrollValue;
          else if(scrollValue < -maxScrollValue) scrollValue = -maxScrollValue;
          speed = scrollValue;
          clearTimeout(timer);
          timer = setTimeout(handleSpeedClear, 10);
    }

  }//afterViewInit

}
