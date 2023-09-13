import { createReducer, on } from '@ngrx/store';
import { ProductState } from '.';
import * as ProductsAction from './product.actions';

export const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: '',
};

export const productReducer = createReducer(
  initialState,
  on(ProductsAction.getProducts, (state) => ({ ...state, isLoading: true })),
  on(ProductsAction.getProductsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    products: action.products,
  })),
  on(ProductsAction.getProductsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
