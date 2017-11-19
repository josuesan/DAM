import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private flashlight: Flashlight) {

  }
  onClick(){
  	this.flashlight.switchOn();
  }
  donClick(){
  	this.flashlight.switchOff();
  }
}
