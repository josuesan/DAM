/**
 * Global imports
 */
import { Component,EventEmitter, Output  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Local imports
 */
import { FilmService, AuthService } from '../../services';
import { Film } from '../../interfaces/film';

/**
 * Generated class for the FilmsPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
selector: 'page-films',
templateUrl: 'films.html',
})
export class FilmsPage {
	public peliculas:Array<Film>;

	constructor(
		private films:FilmService, 
		public navCtrl: NavController, 
		public navParams: NavParams,
		private authService:AuthService) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FilmsPage');
		this.peliculas = this.films.getFilms();
		console.log(this.peliculas);
	}

	public async goToDetail(id){ await this.navCtrl.push("FilmDetailPage", {id:id}); }

	public async logout() {
		await this.authService.signOut(this.navCtrl);
	}
}
