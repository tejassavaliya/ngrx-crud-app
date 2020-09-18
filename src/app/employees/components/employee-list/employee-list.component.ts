import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";

import {EmployeesService} from "../../services/employees.service";
import {loadEmployees} from "../../store/employee.actions";
import * as EmployeeAction from '../../store/employee.actions';
import {Observable} from "rxjs";
import {Employee, EmployeeModel} from "../../models/employee";
import { Router } from '@angular/router';
import { EmployeeState } from '../../store/employee.reducer';
import { selectEmployees } from '../../store/employee.selectors';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]> = this.store.pipe(select(selectEmployees));
  default_profile_image: string = 'https://image.shutterstock.com/image-vector/human-icon-people-picture-profile-260nw-1012771615.jpg';
  constructor(private store: Store<EmployeeState>,
              private router: Router,
              private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.store.dispatch(EmployeeAction.loadEmployees());

  }


  deleteEmployee(employee) {
    console.log("DEletet ", employee)
    this.store.dispatch(EmployeeAction.deleteEmployee({id: employee.id}))
  }

}
