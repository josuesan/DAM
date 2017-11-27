import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../interfaces/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../interfaces/profile';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare const $:any;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data = {} as Profile;
	user:User = {
		email: "",
		password: ""
	};
  constructor(private tosty:ToastController,private afDB:AngularFireDatabase, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(){
  	this.navCtrl.push('RegisterPage');
  }

  async login(user:User){
  	try{
  		const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
  		if(result){
        this.afAuth.authState.take(1).subscribe(auth => {
          this.afDB.object(`profile/${auth.uid}`).snapshotChanges().subscribe(data =>{
            if(data.key != null){
              this.navCtrl.setRoot("TabsPage");
            }
            else{
              this.navCtrl.setRoot("ProfilePage");
            }
          }) 
        });
  		}
  	}
  	catch(e){
  		console.log(e);
      user.password="";
      this.tosty.create({
          message: `Se encontro un error en el usuario o en la contraseña`,
          duration: 4000
        }).present();
  	}
  	

  }
}
