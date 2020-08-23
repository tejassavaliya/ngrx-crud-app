import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromEmployeeState from './store';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/employee.effects';
import {EmployeesService} from "./services/employees.service";
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [EmployeeListComponent, EmployeeAddComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    StoreModule.forFeature(
      fromEmployeeState.employeeStateFeatureKey,
      fromEmployeeState.reducers, {
        metaReducers: fromEmployeeState.metaReducers
      }),
    EffectsModule.forFeature([EmployeeEffects])
  ],
  providers:[EmployeesService ],
  exports: [
   EmployeeListComponent
  ]
})
export class EmployeesModule { }
