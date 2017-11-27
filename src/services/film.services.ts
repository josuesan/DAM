import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Film } from '../../interfaces/film.services';
@Injectable()
export class FilmServices  {
	url = "http://www.omdbapi.com/?apikey=5753a622&";

	constructor(private http: HttpClient){}
	public getFilms () {
		return 
	}
	public async getFilm(title):Promise<Film | Film[]>{
		let request = this.url +`&s=${title}`;
		console.log(request);
		try{
			let data = await this.http.get(request).toPromise();
			return data;
		}catch(error){
			console.log("An error ocurred: ", error);
		}
	}
}