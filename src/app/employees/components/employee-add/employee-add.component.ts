import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../services/employees.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(private employeesService:EmployeesService,
              private router: Router) { }

  ngOnInit(): void {
    console.log("In add compo")
      /*let reqObj =  {
          "email": "tejas@reqres.in",
          "first_name": "Tejas",
          "last_name": "Savaliya",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        }
      this.employeesService.createEmployee(reqObj).subscribe((emp) => {
        console.log(emp)
        this.router.navigate(['/employee']);
      })*/
  }

  onSubmit(f: NgForm) {
    const productObserver = {
      next: employee => (
        this.router.navigate(["/employees"]), console.log("success")
      ),
      error: err => console.error(err)
    };
  console.log(f.value, productObserver)
    let req ={
      "name":f.value.employee_name,
      "salary":f.value.employee_salary,
      "age":f.value.employee_age
    }
    this.employeesService.createEmployee(req).subscribe(productObserver);
  }

}
