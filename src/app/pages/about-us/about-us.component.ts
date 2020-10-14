import { Component, OnInit } from '@angular/core';
import { AboutUs } from 'src/app/modal/about-us.js';
import { Grid }from '../../../assets/js/demo.js';
import { AllServicesService }from '../../services/all-services.service';
import { gsap } from 'gsap';
import { ScrollTrigger }from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public serverData : AboutUs;

  constructor(private service : AllServicesService) { }


  ngOnInit(): void {
    this.service.aboutUS().subscribe(
      (data : AboutUs) => {
        this.serverData = data;
        new Grid(document.querySelector('.grid'));
      },
      (error) => {console.log(error)}
      )
  }


}
