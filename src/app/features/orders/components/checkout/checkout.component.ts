import { IOrder, IOrederProduct } from './../../../../shared/models/order';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  clientForm: FormGroup;
  checkedOut: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.create_client_form();
  }

  create_client_form() {
    this.clientForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required, Validators.pattern("^((\\+2-?)|0)?[0-9]{10}$")]],
      email: [null, [Validators.required, Validators.email]],
      address: [null, [Validators.required]]
    });
  }

  // check out , send cart data and clear it from service
  checkOut() {
    // prepair order data Object
    const orderProducts: IOrederProduct[] = this.cartService.cartItems.map(p => ({ product_id: p.id, product_itemCount: p.itemCount, unit_price: p.price }))
    const order: IOrder = {
      products: orderProducts,
      orderTotalPrice: this.cartService.cartItemsPrice,
      clientInfo: this.clientForm.value
    }
    this.productsService.saveOrder(order).then(() => {
      this.checkedOut = true;
      this.cartService.reset();
      this.productsService.reset();
    })

  }
}
