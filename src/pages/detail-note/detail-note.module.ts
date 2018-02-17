import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailNotePage } from './detail-note';
import { ServicesModule } from '../../services';
@NgModule({
  declarations: [
    DetailNotePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailNotePage),
    ServicesModule
  ],
})
export class DetailNotePageModule {}
