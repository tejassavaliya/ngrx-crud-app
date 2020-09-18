import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Employee } from '../models/employee';

// load products
export const loadEmployees = createAction(
  '[Employee/API] Load Employees'
);
export const loadEmployeesSuccess = createAction(
  '[Employee/API] Load Employees success',
  props<{ employees: Employee[] }>()
);
export const loadEmployeesFailure = createAction(
  '[Employee/API] Load Employees Failure',
  props<{ error: any }>()
);

// load product
export const loadEmployee = createAction(
  '[Employee/API] Load Employee',
  props<{ id: string }>()
);
export const loadEmployeeSuccess = createAction(
  '[Employee/API] Load Employee success',
  props<{ selectedEmployee: Employee }>()
);
export const loadEmployeeFailure = createAction(
  '[Employee/API] Load Employee Failure',
  props<{ error: any }>()
);


// Add employee
export const addEmployee = createAction(
  '[Employee/API] Add Employee',
  props<{ employee: Employee }>()
);
export const addEmployeeSuccess = createAction(
  '[Employee/API] Add Employee Success',
  props<{ employee: Employee }>()
);
export const addEmployeeFailure = createAction(
  '[Employee/API] Add Employee Failure',
  props<{ error: any }>()
);

// Update employee
export const updateEmployee = createAction(
  '[Employee/API] Update Employee',
  props<{ employee: Update<Employee> }>()
);


// Delete employee
export const deleteEmployee = createAction(
  '[Employee/API] Delete Employee',
  props<{ id: string }>()
);
export const deleteEmployeeSuccess = createAction(
  '[Employee/API] delete Employee Success',
  props<{ id: string }>()
);
export const deleteEmployeeFailure = createAction(
  '[Employee/API] delete Employee Failure',
  props<{ error: any }>()
);


