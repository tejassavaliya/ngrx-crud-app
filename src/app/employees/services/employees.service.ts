import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee, EmployeeModel} from "../models/employee";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }
  // baseUrl:string = `https://reqres.in/api/users`;
  // baseUrl:string = `http://dummy.restapiexample.com/api/v1`
  baseUrl:string = `http://localhost:3000/employees`

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`).pipe(map( (employees) => employees))
  }

  getEmployee(empId: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${empId}`).pipe(map( (employee) => employee))
  }

  updateEmployee(empId: string | number, changes: Partial<Employee>): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${empId}`, changes );
  }
  createEmployee(reqObj: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}`, reqObj );
  }
  deleteEmployee(empId: string): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/${empId}` );
  }
}



// https://www.youtube.com/watch?v=yoMJAIClpuk
// https://github.com/mike1477/NGRX-Products/tree/master/src/app
// https://reqres.in/
// https://jsonplaceholder.typicode.com/photos
