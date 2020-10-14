import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OurworkService }from '../../services/ourwork.service';
import { create }from '@lottiefiles/lottie-interactivity';
import { AllServicesService }from '../../services/all-services.service';

@Component({
  selector: 'app-our-process',
  templateUrl: './our-process.component.html',
  styleUrls: ['./our-process.component.css']
})
export class OurProcessComponent implements OnInit {

  constructor(private service : AllServicesService) { }

  public ourprocessdata ;
  //  [
  //   {
  //     id : "ourProcess1",
  //     lottieURl : '../../../assets/media/json/ourProcess/process11.json',
  //     heading : 'Understanding you is just as important as working with you',
  //     peragraph : 'At Loud Mob Media, everything begins with a discovery session. We roll up our sleeve, get ready to probe deeper and retrieve all critical information to have important project details assessed down to a T.',
  //     button : false ,
  //     buttonContent : '',
  //   },
  //   {
  //     id : "ourProcess2",
  //     lottieURl : '../../../assets/media/json/ourProcess/process22.json',
  //     heading : 'And so is understanding the ecosystem that you exist in',
  //     peragraph : 'At Loud Mob Media, there is no guesswork, everything we do is grounded in rigorous/extensive market research. We explore it all-around and draw relevant insights to form key strategic approaches.',
  //     button : true ,
  //     buttonContent : 'about us',
  //     href : '/aboutUs'
  //   },
  //   {
  //     id : "ourProcess3",
  //     lottieURl : '../../../assets/media/json/ourProcess/process4.json',
  //     heading : 'Decoding competitors to make you stand apart',
  //     peragraph : 'A secret weapon or the mob magic, call it what you will, at this stage, you will be in awe of how well we translate your goals into something distinct and identifiable. In a crowded marketplace, it’s not enough to just be different; we help you forge an identity that is built to last and connects with your audience on a deeper level.',
  //     button : true ,
  //     buttonContent : 'case studies',
  //     href : '/caseStudy',
  //     class : 'justify-content-end'
  //   },
  //   {
  //     id : "ourProcess4",
  //     lottieURl : '../../../assets/media/json/ourProcess/process3.json',
  //     heading : 'Concepts that stand the test of time',
  //     peragraph : 'This is where we connect all the dots. Details are important, but the big picture is what counts in the real marketplace. Leveraging your unique value propositions with unparalleled clarity and confidence, we help your idea do one thing well.',
  //     button : false ,
  //     buttonContent : '',
  //   },
  //   {
  //     id : "ourProcess5",
  //     lottieURl : '../../../assets/media/json/ourProcess/process2.json',
  //     heading : 'Decode. Differentiate. Develop',
  //     peragraph : 'This is the stage when everyone says “make us something unconventional.” Researching, designing and building brands, experience and technologies, we breathe life into concepts that will change minds, generate curiosity and drive results for our clients.',
  //     button : true ,
  //     buttonContent : 'our work',
  //     href : '/ourwork',
  //     class : 'justify-content-end'
  //   },
  //   {
  //     id : "ourProcess6",
  //     lottieURl : '../../../assets/media/json/ourProcess/process1.json',
  //     heading : 'Proof of delivery',
  //     peragraph : 'One last thing before the hand-off. The scope of testing is identified to test the design or product once developed for the improvements, optimization and perfection.',
  //     button : false ,
  //     buttonContent : '',
  //   }
  // ]

  public lazyload = false;

  ngOnInit(): void {

    this.service.ourProcess().subscribe(data=>{
      this.ourprocessdata = data;
      window.setTimeout(()=>{
        this.lazyload = true;
      create({
        mode: 'scroll',
        player: '#ourProcess1',
        actions: [
          {
            visibility:[0,0.1],
            type: 'stop',
            frames: [0]
          },
          {
            visibility:[0.1,1],
            type: 'seek',
            frames: [0],
          }
        ],
      });
      create({
        mode: 'scroll',
        player: '#ourProcess2',
        actions: [
          {
            visibility:[0,0.25],
            type: 'stop',
            frames: [0]
          },
          {
            visibility:[0.25,1],
            type: 'seek',
            frames: [0],
          }
        ],
      });
    },1000)
    },
    err=>{console.log(err)}
    )//service

  }

}
