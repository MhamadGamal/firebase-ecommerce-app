import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OrdersComponent, CheckoutComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
