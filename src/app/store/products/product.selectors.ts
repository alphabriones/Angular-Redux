import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectProducts = (state: AppState) => state.products;
export const isLoading = createSelector(
  selectProducts,
  (state) => state.isLoading
);

export const productsSelector = createSelector(
  selectProducts,
  (state) => state.products
);

export const errorSelector = createSelector(
  selectProducts,
  (state) => state.error
);
