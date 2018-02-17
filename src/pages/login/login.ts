import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../interfaces/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../interfaces/profile';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AuthService } from '../../services'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare const $:any;

@IonicPage({
	name: 'login-page',
	segment: 'login'
})
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	public data = {} as Profile;
	public user:User = { email: "", password: "" };

	constructor(
		private ga: GoogleAnalytics,
		private tosty:ToastController,
		public navCtrl: NavController, 
		public navParams: NavParams,
		private authService:AuthService) {}

	async ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
		try {
			await this.ga.startTrackerWithId('UA-114284393-1');
			console.log('Google analytics is ready now');
			await this.ga.trackView('test');
		} catch (error) {
			console.log('Error starting GoogleAnalytics', error);
		}
	}

	async register(){ await this.navCtrl.push('RegisterPage'); }

	async login(user:User){
		let response = await this.authService.signIn(user, this.navCtrl);
		if (!response){
			user.password="";
			this.tosty.create({
				message: `Se encontro un error en el usuario o en la contraseña`,
				duration: 4000
			}).present();
		}
	}
}
