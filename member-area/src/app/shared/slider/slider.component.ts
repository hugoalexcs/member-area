import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {

  @Input() sliderConfig: any;
  @Input() movies:any;
  @Input() title:any;

  constructor() { }

  ngOnInit(): void {
  }

}
