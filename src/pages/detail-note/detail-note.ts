import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../interfaces/note';

/**
 * Generated class for the DetailNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-detail-note',
	templateUrl: 'detail-note.html',
})
export class DetailNotePage implements OnInit {
	public note:Note = {id: "" , title: "", description: ""};
	public id = null;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams , 
		public notesService: NotesService) {}

	/**
	 * Events management
	 */
	ngOnInit(){
		this.id = this.navParams.get('id');
		if(this.id !=0){
			this.notesService.getNote(this.id).snapshotChanges().subscribe( note=> {
				this.note = note.payload.val();
				console.log("The note is :: ", this.note);
			});
		}
	}

	ionViewDidLoad() { console.log('ionViewDidLoad DetailPage'); }
  
	ionViewCanEnter(): boolean{
		return (this.navParams.get("id") != null || this.navParams.get("id") != undefined) ? true : false;
	}

	public async addNote(){
		if(this.id != 0) this.notesService.editNote(this.note);     
		else{
			this.note.id= Date.now();
			this.notesService.createNote(this.note);
		}
		await this.navCtrl.pop();
	}

	public async deleteNote(){
		let ide= this.note.id;
		this.notesService.deleteNote(ide);
		//await this.navCtrl.;
		/*if(this.navCtrl.canGoBack()){
			console.log("popsiado");
			console.log(this.note);
		}*/
	}

}
