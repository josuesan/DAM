import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmServices } from './film.services';
import { NotesServices } from './notes.services';
import { LogoutServices } from './logout.services';

@NgModule({
  declarations: [
    FilmServices,
    NotesServices,
    LogoutServices
  ],
  imports: [
    FilmServices,
    NotesServices,
    LogoutServices
  ],
  exports:[
    FilmServices,
    NotesServices,
    LogoutServices
  ],
  providers:[
    FilmServices,
    NotesServices,
    LogoutServices

  ],
})
export class ServicesModule {}
