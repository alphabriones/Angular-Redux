import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Product, ProductState } from 'src/app/store/products';
import * as ProductsAction from 'src/app/store/products/product.actions';
import {
  isLoading,
  productsSelector,
  selectProducts,
} from 'src/app/store/products/product.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoading));
    this.products$ = this.store.pipe(select(productsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(ProductsAction.getProducts());
  }
}
