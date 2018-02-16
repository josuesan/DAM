import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesServices } from '../../services/notes.services';
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
  /*result:Observable<any[]> = [];*/
  result = {} as Observable<any[]>;
  flag = false;
  note:Note;
  notes:Array<Note>;
	@ViewChild("myNav") nav:NavController;

  constructor(public navCtrl: NavController, public notesServices: NotesServices, private navParams: NavParams) { 
  }

  public logout() {
    localStorage.clear();
    this.navCtrl.popToRoot().then(()=>{
      this.navCtrl.setRoot("LoginPage");
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
    let result = this.notesServices.getNotes().valueChanges();
    if(result){
      this.flag = true;
      this.result = this.notesServices.getNotes().valueChanges();
    }
  }
  ionViewDidEnter(){
    if(this.navParams.get("id") ){
      console.log('devolviendome NotesPage');
    }
    
  }

	
 
  public goToDetail(id){
  	this.navCtrl.push("DetailNotePage", {id:id});
  }
  public createNote(){
    this.navCtrl.push("DetailNotePage", {id:0});
  }
}
