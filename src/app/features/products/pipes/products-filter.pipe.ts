import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  transform(products: IProduct[], searchValue: string): IProduct[] {
    return products.filter(p => p.name.toLowerCase().startsWith(searchValue.toLowerCase()));
  }

}
