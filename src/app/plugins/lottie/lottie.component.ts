import { Component, Input, OnInit } from '@angular/core';
import { create } from '@lottiefiles/lottie-interactivity';

@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.component.html',
  styleUrls: ['./lottie.component.css']
})
export class LottieComponent implements OnInit {

  @Input()img_src : string;
  @Input()lottie_src : string;
  @Input()id : string;
  @Input()imgVisible : boolean;

  constructor() { }

  ngOnInit(): void {
    window.setTimeout(()=>{
    create({
      mode: 'scroll',
      player: '#'+this.id,
      actions: [
        {
          visibility:[0,0.1],
          type: 'stop',
          frames: [0]
        },
        {
          visibility:[0.1,1],
          type: 'seek',
          frames: [600],
        }
      ],
    });
  },1000)
  }

}
