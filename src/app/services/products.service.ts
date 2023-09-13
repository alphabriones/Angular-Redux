import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from '../store/products';

@Injectable()
export class ProductsService {
  constructor() {}

  getProducts(): Observable<Product[]> {
    const products = [
      {
        title: 'TITLE',
        description: 'DESCRIPTION',
      },
      {
        title: 'TITLE',
        description: 'DESCRIPTION',
      },
      {
        title: 'TITLE',
        description: 'DESCRIPTION',
      },
    ];

    return of(products).pipe(delay(2000));
  }
}
