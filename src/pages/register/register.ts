import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { User } from '../../interfaces/user';
import { AngularFireAuth } from 'angularfire2/auth';
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
	user:User ={
		email: "",
		password: ""
	};
  constructor(public afAuth: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error al resgitrarse',
      subTitle: 'Por favor intentelo de nuevo.',
      buttons: ['OK']
    });
    alert.present();
  }

  async register(user:User){
  	try {
   		const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
   		console.log(result);
   		this.navCtrl.pop();
  	}
  	catch(e){
      this.presentAlert();
  		console.log(e);


  	}
   }
  


}
