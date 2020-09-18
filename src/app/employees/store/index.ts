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
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const employeeStateFeatureKey = 'employeeState';

export interface EmployeeState extends EntityState<Employee> {
  error: any;
}

export const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();


export const initialState = adapter.getInitialState({
  error: undefined

});

export const reducers = createReducer(
  initialState,
  on(EmployeeAction.loadEmployeesSuccess, (state, action) => {
    return adapter.addMany(action.employees, state)
  }),
  on(EmployeeAction.loadEmployeesFailure, (state, action) => {
    return {
      error: action.error
    }
  })
)
export const selectEmployeesFeature = createFeatureSelector<EmployeeState>(
  employeeStateFeatureKey
);

export const selectEmployees = createSelector(
  selectEmployeesFeature,
  adapter.getSelectors().selectAll
);

export const selectError = createSelector(
  selectEmployeesFeature,
  (state: EmployeeState) => state.error

);
export const metaReducers: MetaReducer<EmployeeState>[] = !environment.production ? [] : [];
