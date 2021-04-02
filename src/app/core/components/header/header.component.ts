import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name
  constructor(
    public cartService: CartService
  ) { }

  ngOnInit(): void {
  }

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
