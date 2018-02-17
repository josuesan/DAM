/**
 * Global imports
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { ServiceModule } from '../../services';

@NgModule({
	declarations: [TabsPage],
	imports: [
		IonicPageModule.forChild(TabsPage),
		ServiceModule
	],
})
export class TabsPageModule {}
