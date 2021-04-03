import { Component } from '@angular/core';
import { IProduct } from './shared/models/product';
import { CartService } from './shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  is_Sidebar_Oppened = false;
  constructor(
    public cartService: CartService
  ) { }

  updateCartItem(op, item: IProduct) {
    switch (op) {
      case '-':
        item.itemCount--;
        if (item.itemCount > 0) {
          this.cartService.addItemToCart(item);
        } else {
          this.cartService.removeItemFromCart(item);
        }
        break;
      case '+':
        item.itemCount++;
        this.cartService.addItemToCart(item);
        break;
    }
  }
}
