/**
 * Global imports
 */
import { App } from "ionic-angular";
import { Injectable } from "@angular/core";
import { IonicPage, NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Local imports
 */
import { User } from '../interfaces/user';

@Injectable()
export class AuthService {
    constructor(
        private afDB:AngularFireDatabase, 
        private afAuth:AngularFireAuth,
        private app: App){}

    public async signIn(user:User, navCtrl:NavController){
        try{
			const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
			if(result){
                this.afAuth.authState.take(1).subscribe(auth => {
                    this.afDB.object(`profile/${auth.uid}`).snapshotChanges().subscribe(data =>{
                        if(data.key != null) navCtrl.setRoot("TabsPage");
                        else navCtrl.setRoot("ProfilePage");
                    }) 
                });
            }
            return true;
		} catch(e){
            console.log(e);
            return false;
		}
    }

    public async signOut(navCtrl:NavController){
        localStorage.clear();
        await navCtrl.popToRoot();
        await navCtrl.setRoot("login-page");
        this.app.getRootNav().setRoot("login-page");
        this.afAuth.auth.signOut();
    }


    public async register(user:User){
        try {
            const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
            console.log(result);
            return true;
        }catch(e){ return false; }
    }
}