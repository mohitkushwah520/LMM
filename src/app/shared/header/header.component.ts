import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { gsap }from 'gsap';
import { filter } from 'rxjs/operators';
import { DialogService }from '../../services/dialog.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('logo') logo : ElementRef;
  @ViewChild('menu') menu : ElementRef;
  @ViewChild('monkeyVideo')monkeyVideo : ElementRef;
  public headerColor ;
  constructor(private service : DialogService,private router : Router) {
    // router.events.pipe(
    //   filter((e)=>{
    //     return (e instanceof NavigationStart)
    //   })
    // ).subscribe(
    //   (eve : NavigationStart)=>{
    //     console.group("navigation start")
    //     console.log("navigation id:", eve.id);
    //     console.log("navigation url:", eve.url);
    //     console.log("trigger",eve.navigationTrigger);
    //     if(eve.restoredState){
    //       console.warn(
    //         "restoring navigation id:",
    //         eve.restoredState.navigationId
    //       );
    //     }
    //   }
    // )
   }

  ngOnInit(): void {
    this.service.rcnMsg().subscribe(data=>{
      this.headerColor = data
    });
  }
  ngAfterViewInit(){
    this.gsapAnimation();
  }
  gsapAnimation(){
    var vv = [this.logo.nativeElement , this.menu.nativeElement.childNodes]
    gsap.from(vv,{
      duration : 0.5,
      opacity:0,
      y:-20,
      stagger : 0.2,
      delay :1.5
    })
  }

}
