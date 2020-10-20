import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DialogService }from '../../services/dialog.service';


@Component({
  selector: 'app-monkey-footer',
  templateUrl: './monkey-footer.component.html',
  styleUrls: ['./monkey-footer.component.css']
})
export class MonkeyFooterComponent implements OnInit {

  @ViewChild('monkeyVideo')monkeyVideo : ElementRef
  constructor(private service : DialogService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    var allvideo = document.querySelectorAll('video');
    allvideo.forEach((el)=>{
      var video = el as HTMLVideoElement;
      video.muted = true;
      video.play();
    })
    this.monkeyVideo.nativeElement.play = true;
    window.addEventListener('scroll',()=>{
      this.monkeyVideo.nativeElement.play = true;

      var dis = this.monkeyVideo.nativeElement.getBoundingClientRect().top;
      if(dis <= 100){
        var header = false;
        this.service.sendMsg(header);
      }else{
        var header = false;
        this.service.sendMsg(header);
      }
})
  }
}
