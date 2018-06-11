import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RoundProgressModule, RoundProgressConfig} from 'angular-svg-round-progressbar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  current: number = 27;
  max: number = 55;
  stroke: number = 15;
  radius: number = 70;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;
  rate:number;
  constructor(public navCtrl: NavController,private _config: RoundProgressConfig) {
    _config.setDefaults({
      color: '#f00',
      background: '#0f0'
    });
    
  }
  doSomethingWithCurrentValue($event){
    let maxvalue
    this.max= maxvalue;
  }

  

}
