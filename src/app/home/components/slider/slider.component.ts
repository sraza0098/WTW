import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() isMeasurement: boolean = false;
  @Input() isResults: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
