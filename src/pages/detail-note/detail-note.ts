import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesServices } from '../../services/notes.services';
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
export class DetailNotePage {
  note:Note = {id: "" , title: "", description: ""};
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams , public notesServices: NotesServices) {
    this.id = navParams.get('id');
    if(this.id !=0){
      /*notesServices.getNote(this.id)
      .subscribe(note=>{
        this.note = note;
      })*/
      notesServices.getNote(this.id).snapshotChanges().subscribe(
      	note=> {
      		this.note = note.payload.val();
      	}
      )
    }
    /*else{
      let views = this.navCtrl.length();
      if ( views > 0){
        this.navCtrl.pop();
      } 
      else{
         this.navCtrl.setRoot("TabsPage");
      }
    }*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  
  ionViewCanEnter(): boolean{
   // here we can either return true or false
   // depending on if we want to leave this view
   if(this.navParams.get("id") != null || this.navParams.get("id") != undefined){
      return true;
    } else {
      return false;
    }
  }
  public addNote(){
    if(this.id != 0){
      /*EDITAR*/
      this.notesServices.editNote(this.note);     
    }else{
      this.note.id= Date.now();
      this.notesServices.createNote(this.note);
    }
    this.navCtrl.pop();
  }
  public deleteNote(){
    let ide= this.note.id;
    this.notesServices.deleteNote(ide);
    if(this.navCtrl.canGoBack()){
      this.navCtrl.pop();
      console.log("popsiado");
      console.log(this.note);
    }

  }

}
