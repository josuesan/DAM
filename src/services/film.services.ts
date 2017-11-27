import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class FilmServices  {
	url = "http://www.omdbapi.com/?apikey=5753a622&";

	constructor(private http: HttpClient){}
	public getFilms () {
		return 
	}
	public getFilm(title){
		let request = this.url +`&s=${title}`;
		console.log(request);
		this.http.get(request).subscribe(data => {
	      // Read the result field from the JSON response.
	      console.log(data);
	      return  data;
	    });
		
	}
}