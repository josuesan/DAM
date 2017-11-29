import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalizacionPage } from './localizacion';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    LocalizacionPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalizacionPage),

	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD72g6xj5LqEnujNnCxm8LKNzaez75x9-A'
    }),
  ],
})
export class LocalizacionPageModule {}
