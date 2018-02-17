import { Component, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireObject } from 'angularfire2/database';
import { Profile } from '../../interfaces/profile';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  profile :Observable<AngularFireObject<Profile>>;
  profileDATA:Profile;
  

  constructor( private afDB:AngularFireDatabase, private tosty:ToastController, private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

    this.afAuth.authState.subscribe(data => {
       
      if(data && data.email){  
        this.afDB.object(`profile/${data.uid}`).snapshotChanges().subscribe( profileDATA => {
           this.profileDATA = profileDATA.payload.val();
           this.tosty.create({
              message: `Bienvenido ${this.profileDATA.name }`,
              duration: 4000
            }).present();
        })  
        
      }
      else{
        this.tosty.create({
          message: `No se encontraron los datos de autenticacion`,
          duration: 4000
        }).present();
        this.navCtrl.setRoot("LoginPage");
      }
      
    });

  }
 
   tab1Root = "FilmsPage";
   tab2Root = "NotesPage";
   tab3Root = "LocalizacionPage";
}
