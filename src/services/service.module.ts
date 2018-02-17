/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicPageModule } from 'ionic-angular';

/**
 * Local Storage
 */
import { FilmService } from './film.service';
import { NotesService } from './notes.service';
import { AuthService } from './auth.service';
import { FIREBASE_CONFIG } from './firebase.config';

@NgModule({
	imports: [
		AngularFireModule.initializeApp(FIREBASE_CONFIG),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
	],
	providers:[
		FilmService,
		NotesService,
		AuthService
	]
})
export class ServiceModule {}
