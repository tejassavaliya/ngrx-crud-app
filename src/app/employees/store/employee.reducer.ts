import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Employee } from '../models/employee';
import * as EmployeeActions from './employee.actions';

export const employeesFeatureKey = 'employees';

export interface EmployeeState extends EntityState<Employee> {
  // additional entities state properties
  error: any;
  selectedEmployee: Employee
}

export const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();

export const initialState: EmployeeState = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
  selectedEmployee: undefined
});


export const employeeReducer = createReducer(
  initialState,

  // loadEmployees
  on(EmployeeActions.loadEmployeesSuccess,
    (state, action) => adapter.setAll(action.employees, state)
  ),
  on(EmployeeActions.loadEmployeesFailure, (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),

// loadEmployee
  on(EmployeeActions.loadEmployeeSuccess, (state, action) => {
      return {
        ...state,
        selectedEmployee: action.selectedEmployee
      }
    }
  ),
  on(EmployeeActions.loadEmployeeFailure, (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),

  // Add Employee
  on(EmployeeActions.addEmployeeSuccess, (state, action) =>
    adapter.addOne(action.employee, state)
  ),
  on(EmployeeActions.addEmployeeFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),

  // Update Employee
  on(EmployeeActions.updateEmployee, (state, action) =>
    adapter.updateOne(action.employee, state)
  ),

  on(EmployeeActions.deleteEmployeeSuccess, (state, action) =>
    adapter.removeOne(action.id, state)
  ),

);

export function reducer(state: EmployeeState | undefined, action: Action) {
  return employeeReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
