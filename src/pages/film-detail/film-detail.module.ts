/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Local imports
 */
import { FilmDetailPage } from './film-detail';
import { ServiceModule } from '../../services';

@NgModule({
	declarations: [
		FilmDetailPage,
	],
	imports: [
		IonicPageModule.forChild(FilmDetailPage),
		ServiceModule
	],
})
export class FilmDetailPageModule {}
