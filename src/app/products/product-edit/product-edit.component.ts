import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProductService) { }
  model: any = {};
  ngOnInit(): void {
    this.service
      .getProduct(this.route.snapshot.paramMap.get("id"))
      .subscribe(product => (this.model = product));
  }
  onSubmit() {
    const productObserver = {
      next: product => {
        this.router.navigate(["/product/list"]), console.log("success");
      },
      error: err => console.error(err)
    };
    console.log(this.model);
    this.service.updateProduct(this.model).subscribe(productObserver);
  }
}
