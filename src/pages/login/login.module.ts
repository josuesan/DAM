import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ServiceModule } from '../../services';

@NgModule({
	declarations: [LoginPage],
	imports: [
		IonicPageModule.forChild(LoginPage),
		ServiceModule
	],
})
export class LoginPageModule {}
