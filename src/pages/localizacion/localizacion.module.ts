/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';

/**
 * Local imports
 */
import { LocalizacionPage } from './localizacion';
import { ServiceModule } from '../../services';


@NgModule({
	declarations: [LocalizacionPage],
	imports: [
		IonicPageModule.forChild(LocalizacionPage),
		ServiceModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyD72g6xj5LqEnujNnCxm8LKNzaez75x9-A'
		}),
	]
})
export class LocalizacionPageModule {}
