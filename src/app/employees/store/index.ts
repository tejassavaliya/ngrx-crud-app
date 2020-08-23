import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import * as EmployeeAction from '../store/employee.actions';

import { environment } from '../../../environments/environment';
import {Employee, EmployeeModel} from "../models/employee";

export const employeeStateFeatureKey = 'employeeState';

export interface EmployeeState {
  employees: Employee[];
  error: any;
}
export const initialState: EmployeeState = {
  employees: undefined,
  error: undefined
};

export const reducers = createReducer(
  initialState,
  on(EmployeeAction.loadEmployeesSuccess, (state, action) => {
    return {
      employees: action.employees
    }
  }),
  on(EmployeeAction.loadEmployeesFailure, (state, action) => {
    return {
      employees: state.employees,
      error: action.error
    }
  })
)
export const selectEmployeesFeature = createFeatureSelector<EmployeeState>(employeeStateFeatureKey);

export const selectFeatureEmployees = createSelector(
  selectEmployeesFeature,
  (state: EmployeeState) => state.employees
);

export const metaReducers: MetaReducer<EmployeeState>[] = !environment.production ? [] : [];
