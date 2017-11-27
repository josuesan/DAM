import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingListServices } from '../../services/shopping-list.services';
import { Item } from '../../interfaces/item';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
shoppingList:Observable<Item[]>;
  constructor(private shopping:ShoppingListServices, public navCtrl: NavController, public navParams: NavParams) {
  	  this.shoppingList = shopping.getShoppingList()  //List database
    .snapshotChanges() // Key and values
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

}
