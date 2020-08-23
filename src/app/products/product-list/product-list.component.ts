import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {ProductState, selectProducts} from "../store";
import * as ProductAction from '../store/product.actions';
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>
  constructor(private productService:ProductService,
              private router: Router,
              private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.store.dispatch(ProductAction.loadProducts())
    this.products$ = this.store.pipe(select(selectProducts));
  }

  deleteProduct(id: number) {
    const productsObserver = {
      next: () => {
        console.log("Product Deleted");
        this.ngOnInit();
      },
      error: err => console.error(err)
    };
    this.productService.deleteProduct(id).subscribe(productsObserver)
  }
}
