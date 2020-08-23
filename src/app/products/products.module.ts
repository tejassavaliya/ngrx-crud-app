import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { StoreModule } from '@ngrx/store';
import * as fromProductState from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import {FormsModule} from "@angular/forms";
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    StoreModule.forFeature(fromProductState.productStateFeatureKey,
      fromProductState.reducers, {
      metaReducers: fromProductState.metaReducers
    }),
    EffectsModule.forFeature([ProductEffects])
  ],
  exports: [
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductComponent
  ],
})
export class ProductsModule { }
