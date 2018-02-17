import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireObject } from 'angularfire2/database';
@Injectable()
export class LogoutServices  {

    constructor(public navCtrl: NavController,private afDB:AngularFireDatabase, private afAuth:AngularFireAuth,){
        
    }

    public signOut(){
        this.navCtrl.popToRoot().then(()=>{
            this.navCtrl.setRoot("LoginPage");
             this.afAuth.auth.signOut();
        });
    }
    
}