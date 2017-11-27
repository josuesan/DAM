import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesServices } from '../../services/notes.services';
import { Note } from '../../interfaces/note';
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
	//notes= [];
  notes:Array<Note>;
	@ViewChild("myNav") nav:NavController;

  constructor(public navCtrl: NavController, public notesServices: NotesServices) {
    notesServices.getNotes().snapshotChanges().subscribe(
    	notas => {
        notas.forEach(note=> {
          this.notes.push(note.payload.val())
        })
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

	
  
  public goToDetail(id){
  	this.navCtrl.push("DetailNotePage", {id:id});
  }
  public createNote(){
    this.navCtrl.push("DetailNotePage", {id:0});
  }
}
