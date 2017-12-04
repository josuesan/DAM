import {Injectable} from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class NotesServices  {

	constructor(public db: AngularFireDatabase){}
	notes = [
		{id:1 , title: "titulo 1", description: "Descripcion 1"},
		{id:2 , title: "titulo 2", description: "Descripcion 2"},
		{id:3 , title: "titulo 3", description: "Descripcion 3"}
	]

	public getNotes () {
		return this.db.list("notas/");
	}
	public getNote(id){
		return this.db.object("notas/"+id);
	}
	public createNote(note){
		this.db.database.ref('notas/'+ note.id).set(note);
	}
	public editNote(note){

		this.db.database.ref('notas/'+ note.id).set(note);

	}
	public deleteNote(ide){
		let id:string = ide+"";
		this.db.list("notas/").remove(id);
	}
}