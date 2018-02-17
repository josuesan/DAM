/**
 * Global imports
 */
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Local imports
 */
import { NotesService } from '../../services';
import { Note } from '../../interfaces/note';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
	public result = {} as Observable<any[]>;
	public flag = false;
	public note:Note;
	public notes:Array<Note>;
	@ViewChild("myNav") public nav:NavController;

	constructor(
		public navCtrl: NavController, 
		public notesServices: NotesService, 
		private navParams: NavParams) { }

	public logout() {}
  
	ionViewDidLoad() {
		console.log('ionViewDidLoad NotesPage');
		let result = this.notesServices.getNotes().valueChanges();
		if(result){
			this.flag = true;
			this.result = this.notesServices.getNotes().valueChanges();
		}
	}

	ionViewDidEnter(){
		if(this.navParams.get("id") )
			console.log('devolviendome NotesPage');
	}

	public async goToDetail(id){
		await this.navCtrl.push("DetailNotePage", {id:id});
	}

	public async createNote(){
		await this.navCtrl.push("DetailNotePage", {id:0});
	}
}
