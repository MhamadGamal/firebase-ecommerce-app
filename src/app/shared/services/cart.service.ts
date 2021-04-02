import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsCount = 0;
  cartItemsPrice = 0;
  private _cartItems: IProduct[] = [];

  set cartItems(cartItems: IProduct[]) {
    this._cartItems = cartItems;
  }

  get cartItems() {
    return this._cartItems;
  }
  constructor() {
    // this.cartItems = localStorage.getItem('cart_items') ? JSON.parse(localStorage.getItem('cart_items')) : [];
    // this.cartItemsCount = localStorage.getItem('cart_items_count') ? +localStorage.getItem('cart_items_count') : 0;
  }
  // add item to cart and update local storage
  addItemToCart(item: IProduct) {
    const index = this.cartItems.findIndex(i => i.id === item.id);
    index >= 0 ? this.cartItems[index] = item : this.cartItems.push(item);
    this.update_Cart_Items_Count_Price();
  }

  // remove item from cart and update local storage
  removeItemFromCart(item: IProduct) {
    this.cartItems.push(item);
    this.update_Cart_Items_Count_Price();

  }

  updateSavedItems() {
    this.update_Cart_Items_Count_Price();
    // localStorage.setItem('cart_items', JSON.stringify(this.cartItems))
    // localStorage.setItem('cart_items_count', String(this.cartItemsCount));

  }

  update_Cart_Items_Count_Price() {
    this.cartItemsCount = 0;
    this.cartItemsPrice = 0;
    this.cartItems.forEach(item => this.cartItemsCount += item.itemCount)
    this.cartItems.forEach(item => this.cartItemsPrice += (item.price * item.itemCount))
  }

  // reset all service data
  reset() {
    this.cartItems = [];
    this.cartItemsCount = 0;
    this.cartItemsPrice = 0;
  }
}
