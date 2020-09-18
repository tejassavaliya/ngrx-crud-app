import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { StoreModule } from '@ngrx/store';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/employee.effects';
import {EmployeesService} from "./services/employees.service";
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import * as fromEmployee from './store/employee.reducer';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeAddComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromEmployee.employeesFeatureKey,
      fromEmployee.reducer),
    EffectsModule.forFeature([EmployeeEffects]),
    StoreModule.forFeature(fromEmployee.employeesFeatureKey, fromEmployee.reducer)
  ],
  providers:[EmployeesService ],
  exports: [
   EmployeeListComponent
  ]
})
export class EmployeesModule { }
