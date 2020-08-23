import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EmployeesService} from "../services/employees.service";
import * as EmployeeAction from '../store/employee.actions';
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";


@Injectable()
export class EmployeeEffects {

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeAction.loadEmployees),
      mergeMap(() => this.employeesService.getEmployees()
        .pipe(
          map(employees => EmployeeAction.loadEmployeesSuccess({employees})),
          catchError(error => of(EmployeeAction.loadEmployeesFailure({error})))
        )
      )
    )
  );

  constructor(private actions$: Actions,
              private employeesService: EmployeesService) {}

}
