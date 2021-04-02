import { IProduct } from './../../../../../shared/models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
