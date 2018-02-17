/**
 * Global imports
 */
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Local imports
 */
import { Film } from '../../interfaces/film';
import { FilmService } from  '../../services';


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
export class FilmDetailPage implements OnInit {
	public filmID:string;
	public film = {} as Film;

	constructor(private filmService:FilmService, public navCtrl: NavController, public navParams: NavParams) {}

	ionViewDidLoad() { console.log('ionViewDidLoad FilmDetailPage'); }

	ngOnInit (){
		/**
		 * Retrieve film detail
		 */
		this.filmID= this.navParams.get("id");
		if(this.filmID){
			let result = this.filmService.getFilm(this.filmID);
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
}
