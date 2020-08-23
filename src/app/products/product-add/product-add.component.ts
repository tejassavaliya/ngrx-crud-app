import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    const productObserver = {
      next: product => (
        this.router.navigate(["/product/list"]), console.log("success")
      ),
      error: err => console.error(err)
    };

    this.productService.createProduct(f.value).subscribe(productObserver);
  }
}
