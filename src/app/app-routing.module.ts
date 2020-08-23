import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";


const routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path: "employee",
    loadChildren:() => import('./employees/employees.module').then(m => m.EmployeesModule)
  },
  {
    path: "product",
    loadChildren:() => import('./products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
