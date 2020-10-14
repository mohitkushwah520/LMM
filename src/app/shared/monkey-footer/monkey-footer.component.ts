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
    this.monkeyVideo.nativeElement.play = true;
    window.addEventListener('scroll',()=>{
      this.monkeyVideo.nativeElement.play = true;

      var dis = this.monkeyVideo.nativeElement.getBoundingClientRect().top;
      if(dis <= 100){
        var header = true;
        this.service.sendMsg(header);
      }else{
        var header = false;
        this.service.sendMsg(header);
      }
})
  }
}
