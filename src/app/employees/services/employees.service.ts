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
  baseUrl:string = `http://localhost:3000`

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`).pipe(map( (employees) => employees))
  }
  createEmployee(reqObj) {
    return this.http.post(`${this.baseUrl}/create`, reqObj )
  }
}
// https://www.youtube.com/watch?v=yoMJAIClpuk
// https://github.com/mike1477/NGRX-Products/tree/master/src/app
// https://reqres.in/
// https://jsonplaceholder.typicode.com/photos
