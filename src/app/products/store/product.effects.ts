import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ProductService} from "../services/product.service";
import * as ProductAction from '../store/product.actions';
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";


@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductAction.loadProducts),
    mergeMap(() => this.productService.getProducts()
      .pipe(
        map(products => ProductAction.loadProductsSuccess({products}) ),
        catchError(error => of(ProductAction.loadProductsFailure({error})))
      ))
    )
  );

  constructor(private actions$: Actions,
              private productService: ProductService) {}

}
