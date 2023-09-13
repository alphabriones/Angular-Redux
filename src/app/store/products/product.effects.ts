import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import * as ProductsAction from './product.actions';

@Injectable()
export class ProductEffects {
  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsAction.getProducts),
      mergeMap(() => {
        return this.productsService
          .getProducts()
          .pipe(
            map((products) => ProductsAction.getProductsSuccess({ products }))
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
