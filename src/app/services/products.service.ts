import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
import { delay, Observable, of } from 'rxjs';
import { Product } from '../store/products';

@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<any>('https://dummyjson.com/products')
      .pipe(map((response) => response.products));
  }
}
