import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eyehop',
  templateUrl: './eyehop.component.html',
  styleUrls: ['./eyehop.component.css']
})
export class EyehopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
