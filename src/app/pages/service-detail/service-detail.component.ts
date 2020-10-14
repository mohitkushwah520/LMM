import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { AllServicesService }from '../../services/all-services.service';
import { create } from '@lottiefiles/lottie-interactivity';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  public title ;
  public bannerData :any = {};
  public pageContentData : any = {};

  constructor(private router:ActivatedRoute , private service : AllServicesService ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(
      result => {
        this.title = result.get('slug');
          this.service.serviceDetailBanner(this.title).subscribe((data:any) =>{
            this.bannerData = data;
          })//banner
          this.service.serviceDetailpageContent(this.title).subscribe((data : any) =>{
            this.pageContentData = data;
            window.onload = function(){

            }
          })
      }
    )
  }

}
