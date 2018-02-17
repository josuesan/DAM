import { Component } from '@angular/core';
import { Platform, ModalController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string= "login-page";

  constructor(modalCtrl:ModalController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      /*Remove hide splash screen*/
      //splashScreen.hide();
      let splash = modalCtrl.create("SplashPage");
      splash.present();
    });
  }
}
