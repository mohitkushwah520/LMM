import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap }from 'gsap';
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
  constructor(private service : DialogService) { }

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
