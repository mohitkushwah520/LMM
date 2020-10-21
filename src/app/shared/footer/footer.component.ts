import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router }from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    // window.setTimeout(()=>{
    //   console.log(document.documentElement.scrollHeight)
    // },1000)
    // // console.log(document.getElementsByClassName('footer').scrollHeight)
    // $(window).scroll(console.log('hii'))
  }
}
