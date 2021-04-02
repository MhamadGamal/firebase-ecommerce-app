import { ProductsService } from './../../../../../shared/services/products.service';
import { IProduct } from './../../../../../shared/models/product';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: IProduct;
  itemNum: number;
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.itemNum = this.item.itemCount;
  }

  addToCart() {
    this.item.itemCount = this.itemNum;
    // update cashed data item count in service
    this.productsService.products.find(p => p.id === this.item.id ? p.itemCount = this.itemNum : null)
    this.cartService.addItemToCart(this.item);
  }

}
