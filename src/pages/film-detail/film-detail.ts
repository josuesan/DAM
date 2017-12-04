import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Film } from '../../interfaces/film';
import { FilmServices } from  '../../services/film.services';

/**
 * Generated class for the FilmDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film-detail',
  templateUrl: 'film-detail.html',
})
export class FilmDetailPage {
	filmID:string;
	film = {} as Film;
  constructor(private filmServices:FilmServices,public navCtrl: NavController, public navParams: NavParams) {
  	this.filmID= this.navParams.get("id");
  	if(this.filmID){

      let result = filmServices.getFilm(this.filmID);
      result.then(data =>{
        console.log(data);
        this.film.Actors = data["Actors"];
        this.film.Director = data["Director"];
        this.film.ImdbRating = data["imdbRating"];
        this.film.Plot = data["Plot"];
        this.film.Poster = data["Poster"];
        this.film.Runtime = data["Runtime"];
        this.film.Title = data["Title"];
        this.film.Year = data["Year"];
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmDetailPage');
  }

}
