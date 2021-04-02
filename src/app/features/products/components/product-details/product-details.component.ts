import { async } from '@angular/core/testing';
import { IProduct } from './../../../../shared/models/product';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  item: IProduct;
  subsecription: Subscription = new Subscription();
  constructor(
    private ac: ActivatedRoute,
    private productsService: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.subsecription.add(
      this.ac.params.subscribe(params => {
        this.productsService.getAllProducts().subscribe(products => {
          this.item = products.find(p => p.id == params.id)
        })
      })
    )
  }
  ngOnDestroy() {
    this.subsecription.unsubscribe()
  }
}
