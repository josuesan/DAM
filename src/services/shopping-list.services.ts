import {Injectable} from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../interfaces/item';
@Injectable()
export class ShoppingListServices  {
	private shoppingListRef = this.afDB.list<Item>("shopping-list");
	constructor(private afDB:AngularFireDatabase ){

	}
	getShoppingList(){
		return this.shoppingListRef;
	}
	addItem(item:Item){
		return this.shoppingListRef.push(item);
	}
}