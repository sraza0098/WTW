import { Component, OnInit } from '@angular/core';
import { SliderNav } from 'src/app/models/actionNav.model';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {
  public screenSliderSwitch: SliderNav = {
    measurement: false,
    results: false,
  };
  constructor() { }

  ngOnInit(): void {
  }

  togglePanel(drawer:any, screenType:string){
    this.resetScreenSlider();
    if(!drawer.opened){
      drawer.open();
    }
    switch (screenType) {
      case 'measurement':this.screenSliderSwitch.measurement = true;
        break;
      case 'results':this.screenSliderSwitch.results = true;
        break;
      case 'close':drawer.close();
        break;
      default:
        break;
    }
  }

  resetScreenSlider(){
    this.screenSliderSwitch = {
      measurement: false,
      results:false
    };
  }
}
