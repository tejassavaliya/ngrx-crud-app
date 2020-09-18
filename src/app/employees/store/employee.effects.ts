import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, concatMap, catchError, tap } from 'rxjs/operators';
import { EmployeesService } from '../services/employees.service';
import * as fromEmployeeActions from './employee.actions';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';

@Injectable()
export class EmployeeEffects {

  loadEmployees$ = createEffect(() => this.actions$.pipe(
    ofType(fromEmployeeActions.loadEmployees),
    mergeMap(() => this.employeesService.getEmployees()
      .pipe(
        map(employees => fromEmployeeActions.loadEmployeesSuccess({ employees})),
        catchError((error) =>
          of(fromEmployeeActions.loadEmployeesFailure({ error })
        )
      )
    )
  )));

  loadEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(fromEmployeeActions.loadEmployee),
    mergeMap((action) => this.employeesService.getEmployee(action.id)
      .pipe(
        map(employee => fromEmployeeActions.loadEmployeeSuccess({ selectedEmployee: employee})),
        catchError((error) =>
          of(fromEmployeeActions.loadEmployeesFailure({ error })
        )
      )
    )
  )));

  createEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(fromEmployeeActions.addEmployee),
    mergeMap((action) => this.employeesService.createEmployee(action.employee)
      .pipe(
        map(employee => fromEmployeeActions.addEmployeeSuccess({ employee})),
        catchError((error) =>
          of(fromEmployeeActions.addEmployeeFailure({ error }))
        )
      )
    ),
    tap(() => this.router.navigate(['/employee']))
  ));

  deleteEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(fromEmployeeActions.deleteEmployee),
    mergeMap((action) => this.employeesService.deleteEmployee(action.id)
      .pipe(
        map(employee => fromEmployeeActions.deleteEmployeeSuccess({ id: action.id})),
        catchError((error) =>
          of(fromEmployeeActions.deleteEmployeeFailure({ error }))
        )
      )
    )
  ));

  updateEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(fromEmployeeActions.updateEmployee),
    concatMap(action =>
      this.employeesService.updateEmployee(
        action.employee.id,
        action.employee.changes
      )
    ),
    tap(() => this.router.navigate(['/employee']))
  ),
    { dispatch: false }
  );


  constructor(private actions$: Actions,
    private router: Router,
    private employeesService: EmployeesService) {}

}
