import { IProduct } from './../../../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Array<IProduct>;
  filterValue = '';
  view = 'grid'
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productsService.getAllProducts().subscribe((products: IProduct[]) => {
      this.products = products
    });
  }

}
