import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartItemComponent } from './components/products/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { ProductsFilterPipe } from './pipes/products-filter.pipe'
import { NumbersOnlyDirective } from 'src/app/shared/directives/numbersOnly';


@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent, CartItemComponent, ProductsFilterPipe, NumbersOnlyDirective],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
