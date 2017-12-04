import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Film } from '../interfaces/film';


@Injectable()
export class FilmServices  {
	url = "http://www.omdbapi.com/?apikey=5753a622&";
	peliculas=["Batman","Fast and furious", "Star Wars", "Marvel", "Pirates of the Caribbean"];
	films:Array<Film> = [];
	constructor(private http: HttpClient){
		
	}
	public getFilms (): Array<Film> {
		
		for (var i in this.peliculas) {
			let request = this.url +`&s=${this.peliculas[i]}`;

			console.log(request);
			 this.http.get(request).subscribe(data=> {
				//console.log(data);
				data["Search"].forEach(element => {
					//console.log(element);
					if(element.Poster != "N/A") this.films.push(element);
					
				});
				
			})
		}
		return this.films;
		
	}

	public async getFilm(id){
		let request = this.url +`&i=${id}`;
		console.log(request);
		try{
			let data = await this.http.get(request).toPromise();
			return data;
		}catch(error){
			console.log("An error ocurred: ", error);
		}
	}
}