import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	  options: CameraOptions = {
	  quality: 100,
	  destinationType: this.camera.DestinationType.DATA_URL,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE
	}
	x = 1;
  constructor(public navCtrl: NavController , public camera: Camera) {

  }
	
  init(){
  	this.camera.getPicture(this.options).then((imageData) => {
		 // imageData is either a base64 encoded string or a file URI
		 // If it's base64:
		 let base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		 // Handle error
		});
  	if(this.x==1){
  		document.getElementById("divo").style.display = 'none';
  		this.x--;
  	}
  	else{
  		document.getElementById("divo").style.display = 'block';
  		this.x++;
  	}
  	
  }
	
}
