import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmServices } from '../../services/film.services';
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

  constructor(private films:FilmServices, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
    this.getFilm("Batman");
  }
  public goToDetail(id){
  	this.navCtrl.push("FilmDetailPage", {id:id});
  }
  async getFilm(title){
    
    let result = await this.films.getFilm(title);
    console.log( result );
  }
}
