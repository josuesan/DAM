/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Local imports
 */
import { FilmsPage } from './films';
import { ServiceModule } from '../../services';

@NgModule({
	declarations: [ FilmsPage, ],
	imports: [
		IonicPageModule.forChild(FilmsPage),
		ServiceModule
	],
})
export class FilmsPageModule {}
