/**
 * Global imports
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

/**
 * Local imports
 */
import { User } from '../../interfaces/user';
import { AuthService } from '../../services';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-register',
	templateUrl: 'register.html',
})
export class RegisterPage {
	public user:User ={
		email: "",
		password: ""
	};

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private alertCtrl: AlertController,
		private authService:AuthService) {}

	ionViewDidLoad() { console.log('ionViewDidLoad RegisterPage'); }
	presentAlert() {
		let alert = this.alertCtrl.create({
			title: 'Error al resgitrarse',
			subTitle: 'Por favor intentelo de nuevo.',
			buttons: ['OK']
		});
		alert.present();
	}

	async register(user:User){
		let response = await this.authService.register(user);
		if (response) this.navCtrl.pop();
		else this.presentAlert();
	}
}
