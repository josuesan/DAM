import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmDetailPage } from './film-detail';
import { ServicesModule } from '../../services';
@NgModule({
  declarations: [
    FilmDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmDetailPage),
    ServicesModule
  ],
})
export class FilmDetailPageModule {}
