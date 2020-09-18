import { createFeatureSelector, createSelector } from '@ngrx/store';
import { employeesFeatureKey, EmployeeState, selectAll } from './employee.reducer';

export const selectEmployeeState = createFeatureSelector<EmployeeState>(
  employeesFeatureKey
);

export const selectEmployees = createSelector(selectEmployeeState, selectAll);
export const selectEmployee = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.selectedEmployee
);
