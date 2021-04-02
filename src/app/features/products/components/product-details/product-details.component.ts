import { async } from '@angular/core/testing';
import { IProduct } from './../../../../shared/models/product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  item: IProduct;
  itemNum;
  subsecription: Subscription = new Subscription();
  constructor(
    private ac: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.subsecription.add(
      this.ac.params.subscribe(params => {
        this.productsService.getAllProducts().subscribe(products => {
          this.item = products.find(p => p.id == params.id);
          this.itemNum = this.item.itemCount;
        })
      })
    )
  }
  addToCart() {
    this.item.itemCount = this.itemNum;
    // update cashed data item count in service
    this.productsService.products.find(p => p.id === this.item.id ? p.itemCount = this.itemNum : null)
    this.cartService.addItemToCart(this.item);
  }
  ngOnDestroy() {
    this.subsecription.unsubscribe()
  }
}
