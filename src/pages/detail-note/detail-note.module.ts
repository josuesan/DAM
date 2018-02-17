/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Local imports
 */
import { DetailNotePage } from './detail-note';
import { ServiceModule } from '../../services';


@NgModule({
	declarations: [
		DetailNotePage,
	],
	imports: [
		IonicPageModule.forChild(DetailNotePage),
		ServiceModule
	]
})
export class DetailNotePageModule {}
