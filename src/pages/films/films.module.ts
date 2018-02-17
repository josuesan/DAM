import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmsPage } from './films';
import { ServicesModule } from '../../services';
@NgModule({
  declarations: [
    FilmsPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmsPage),
    ServicesModule
  ],
})
export class FilmsPageModule {}
