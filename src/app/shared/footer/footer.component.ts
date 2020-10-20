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
    // // console.log(document.getElementsByClassName('footer').scrollHeight)
    // $(window).scroll(console.log('hii'))
  }
}
