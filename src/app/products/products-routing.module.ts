import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductAddComponent} from "./product-add/product-add.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductComponent} from "./product/product.component";


const routes: Routes = [
  {path:"list",component: ProductListComponent},
  { path: "get/:id", component: ProductComponent },
  { path: "add", component: ProductAddComponent },
  { path: "edit/:id", component: ProductEditComponent }
  ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
