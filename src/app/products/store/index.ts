import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {Product} from "../models/product";
import * as ProductAction from '../store/product.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const productStateFeatureKey = 'productState';

export interface ProductState extends EntityState<Product>{
  error: any;
}

export const adapter:EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState = adapter.getInitialState({
  error: undefined
})

export const reducers = createReducer(
  initialState,
  on(ProductAction.loadProductsSuccess, (state, action) => {
    return adapter.setAll(action.products, state)
  }),
  on(ProductAction.loadProductsFailure, (state, action) => {
    return {
      error: action.error
    }
  })
  // on(ProductAction.loadProductsSuccess, state => ({ ...state, products: state.products}))
);


export const selectProductsFeature = createFeatureSelector<ProductState>(
  productStateFeatureKey
)

export const selectProducts = createSelector(
  selectProductsFeature,
  adapter.getSelectors().selectAll
);
export const selectProductErrors = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.error
);
export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? [] : [];
