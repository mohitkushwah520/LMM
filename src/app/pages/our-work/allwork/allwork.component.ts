import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap }from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OurworkService }from '../../../services/ourwork.service';
import { Ourwork }from '../../../modal/ourwork';

@Component({
  selector: 'app-allwork',
  templateUrl: './allwork.component.html',
  styleUrls: ['./allwork.component.css']
})
export class AllworkComponent implements OnInit {

  constructor(private router : ActivatedRoute , private work : OurworkService ) { }

  public slug ;
  public workData : any =[];

  // @ViewChild('video')video : Q<HTMLVideoElement>
  ngOnInit(): void {
    // window.scroll(0,0)
    this.router.params.subscribe(data => {
      this.slug = data.slug;
      this.work.ourWork(this.slug).subscribe((data : Ourwork)=>{
        this.workData = data;
        window.setTimeout(()=>{
          var video = document.querySelectorAll('.work-card-img video');
          video.forEach((el)=>{
            var video = el as HTMLVideoElement;
            video.muted = true;
            video.play();
          })
        },1000)
      })
    })
  }

}
