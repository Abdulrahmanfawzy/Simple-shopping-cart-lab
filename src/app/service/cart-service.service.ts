import { Injectable } from '@angular/core';
import { Product } from '../product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cartArray: Product[] = [];  // Correctly typed array
  count:number = 0;
  constructor() { }

  addToCart(item:Product){

    const existingItem = this.cartArray.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      if (existingItem.quantity !== undefined) {
        existingItem.quantity += 1;
      } else {
        existingItem.quantity = 1;
      }
    } else {
      item.quantity = 1; 
      this.cartArray.push(item);
    }

    return of(this.cartArray); 
  }

  getCartProducts(){
    return of(this.cartArray); 
  }

  setCartProduct(item:Product){
    this.cartArray = this.cartArray.filter(el=>el.id != item.id);
    return of(this.cartArray); 
  }

}
