import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/product';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _products: IProduct[];

  set products(products: IProduct[]) {
    this._products = products;
  }

  get products() {
    return this._products;
  }
  private dbPath = '/products';

  productssRef: AngularFireList<IProduct>;

  constructor(private db: AngularFireDatabase) {
    this.productssRef = this.db.list(this.dbPath);
  }

  getAllProducts(): Observable<IProduct[]> {
    if (!this.products) {
      return this.productssRef.snapshotChanges().pipe(
        map(changes => {
          this.products = changes.map(c => ({ ...c.payload.val() }))
          return this.products;
        })
      )
    }
    return of(this.products);
  }

  // reset all service data
  reset() {
    this.products = null;
  }
}
