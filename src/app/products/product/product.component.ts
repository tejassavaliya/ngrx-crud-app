import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProductService) { }

  ngOnInit() {
    this.product$ = this.service.getProduct(
      this.route.snapshot.paramMap.get("id")
    );
  }

  deleteProduct(id: number) {
    const productsObserver = {
      next: () => {
        console.log("Product Deleted");
        this.router.navigate(["/product/list"]);
      },
      error: err => console.error(err)
    };
    this.service.deleteProduct(id).subscribe(productsObserver);
  }

}
