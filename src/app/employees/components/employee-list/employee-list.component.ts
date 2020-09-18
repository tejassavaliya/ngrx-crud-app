import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {EmployeeState, selectEmployees} from "../../store";
import {EmployeesService} from "../../services/employees.service";
import {loadEmployees} from "../../store/employee.actions";
import * as EmployeeAction from '../../store/employee.actions';
import {Observable} from "rxjs";
import {Employee, EmployeeModel} from "../../models/employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]>;
  error$: Observable<String>;
  default_profile_image: string = 'https://image.shutterstock.com/image-vector/human-icon-people-picture-profile-260nw-1012771615.jpg';
  constructor(private store: Store<EmployeeState>,
              private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.store.dispatch(EmployeeAction.loadEmployees());
    this.loadEmployees();
    // this.error$ = this.store.pipe(select(fromCustomer.getError));
  }

  loadEmployees() {
    this.employees$ = this.store.pipe(select(selectEmployees))
  }

  editEmployee(employee){
    console.log("Edit ", employee)
  }

  deleteEmployee(employee) {
    console.log("DEletet ", employee)
  }

}
