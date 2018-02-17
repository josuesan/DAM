import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesPage } from './notes';
import { ServiceModule } from '../../services';

@NgModule({
	declarations: [NotesPage],
	imports: [
		IonicPageModule.forChild(NotesPage),
		ServiceModule
	],
})
export class NotesPageModule {}
