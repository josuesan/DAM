import { NgModule, ErrorHandler  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler,NavController, NavParams } from 'ionic-angular';
import { MyApp } from './app.component';

/**
* Native modules
*/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';


/** 
 * Main module description 
 */
@NgModule({
	declarations: [MyApp],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule,
		AgmCoreModule.forRoot({ apiKey: 'AIzaSyD72g6xj5LqEnujNnCxm8LKNzaez75x9-A' }),
	],
	bootstrap: [IonicApp],
	entryComponents: [MyApp],
	providers: [
		StatusBar,
		SplashScreen,
		GoogleMaps,
		Geolocation,
		GoogleAnalytics,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
