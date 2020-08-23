// https://reqres.in/api/users

/*
export interface EmployeeModel {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Employee
}
export interface Employee {
  id: number;
  email: string;
  first_name: string;
  last_name: string
  avatar: string
}
*/


export interface EmployeeModel {
  status: string
  data: Employee
}
export interface Employee {
  id: number;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image:  string;
}
