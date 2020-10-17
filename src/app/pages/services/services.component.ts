import { Component, OnInit } from '@angular/core';
import { ServiceService }from '../../services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public services:any = []

  constructor(private service : ServiceService) {

  }

  ngOnInit(): void {
    var allVideo = document.querySelectorAll('video');
    allVideo.forEach((el)=>{
      var video = el as HTMLVideoElement;
      video.muted = true;
      video.play;
    })
    this.service.getservice().subscribe(data =>{
      this.services = data
    })

  }
  ngAfterViewInit():void{
  }
}
