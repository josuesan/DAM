import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmServices } from '../../services/film.services';
import { Film } from '../../interfaces/film';
/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  peliculas:Array<Film>;
  constructor(private films:FilmServices, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
   /* this.getFilm("Batman");*/
   this.peliculas = this.films.getFilms();
   console.log(this.peliculas);
  }
  public goToDetail(id){
  	this.navCtrl.push("FilmDetailPage", {id:id});
  }
  /*async getFilm(id){
    
    let result = await this.films.getFilm(id);
    console.log( result );
    for (var i in result) {
      console.log(i);
    }
  }*/
}