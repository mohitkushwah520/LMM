import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrolltide',
  templateUrl: './scrolltide.component.html',
  styleUrls: ['./scrolltide.component.css']
})
export class ScrolltideComponent implements OnInit {

  @Input()content : any;
  @Input()type : any;
  @Input()time : number;
  @Input()class : any;

  @ViewChild('scrolltideText')scrolltideText:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    window.addEventListener('scroll',()=>{
      var text = this.scrolltideText.nativeElement;
      var textPosition = text.getBoundingClientRect();
      var deviceWidth = window.innerWidth;
      var deviceHeight = window.innerHeight;
      var time = 100*this.time;
      // text.style.transform = 'translateX(0px)'
      // if(this.type == 'text'){
      if(textPosition.top <= (deviceHeight - time) && text.clientHeight + textPosition.top > 0){
        var translate = -(textPosition.top - deviceHeight + time);
        text.style.transform = 'translateX('+(translate*0.05)+'%)';
      }
    // }

    // if(this.type == 'image'){

    //   console.log(textPosition.top)
    //   if(textPosition.top <= (deviceHeight) && text.clientHeight + textPosition.top > 0){
    //     var translate = -(textPosition.top - deviceHeight + time);
    //     text.style.transform = 'translateX('+(translate)+'px)';
    //   }
    // }
    })
  }

}
