/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

/**
 * Local imports
 */
import { RegisterPage } from './register';
import { ServiceModule } from '../../services';

@NgModule({
	declarations: [RegisterPage],
	imports: [
		IonicPageModule.forChild(RegisterPage),
		ServiceModule
	],
})
export class RegisterPageModule {}
