import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../interfaces/profile';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	profile:Profile ={
		username: "",
		name: ""
	};
  constructor(private afDB: AngularFireDatabase ,private afAuth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  createProfile(){
  	this.afAuth.authState.take(1).subscribe(auth => {
  		this.afDB.object(`profile/${auth.uid}`).set(this.profile).then( () => this.navCtrl.setRoot("login-page"));
  	});
  }
}
