import { Component, OnInit } from '@angular/core';
import {EmployeesService} from "../../services/employees.service";
import {ActivatedRoute, Router} from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {select, Store} from "@ngrx/store";
import { EmployeeState } from '../../store/employee.reducer';
import {Employee, EmployeeModel} from "../../models/employee";
import { selectEmployee } from '../../store/employee.selectors';
import * as EmployeeActions from '../../store/employee.actions';
import {Observable} from "rxjs";
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employee$: Observable<Employee>;
  employee: Employee;
  employeeForm: FormGroup;
  isEditMode: boolean = false;
  constructor(private store: Store<EmployeeState>,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private employeesService: EmployeesService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!(id);
    if(id) {
      // this.isEditMode = true;
      this.store.dispatch(
        EmployeeActions.loadEmployee({id: id})
      )
      this.employee$  = this.store.pipe(select(selectEmployee));
      this.employee$.subscribe((emp) => {
        // if(emp) {
          console.log("In emp", emp)
          this.employee = emp;
          this.loadFormControl(emp);
        // }
      })
    } else {
      // this.isEditMode = false;
      this.loadFormControl(null);
    }




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
  loadFormControl(employee) {
    this.employeeForm = this.formBuilder.group({
      employee_name: [employee ? employee.employee_name : null, [Validators.required] ],
      employee_salary: [employee ? employee.employee_salary : null, [Validators.required] ],
      employee_age: [employee ? employee.employee_age : null, [Validators.required] ],
      profile_image: ['https://image.shutterstock.com/image-vector/human-icon-people-picture-profile-260nw-1012771615.jpg', [] ]
    })
  }
  onSubmit() {
      if(this.isEditMode) {
        console.log("Add new ", this.employeeForm.value)
        const update: Update<Employee> = {
          id: this.employee.id,
          changes: this.employeeForm.value
        }
        this.store.dispatch(EmployeeActions.updateEmployee({employee: update }))
      } else {
          console.log("Add new ", this.employeeForm.value)
          this.store.dispatch(EmployeeActions.addEmployee({ employee: this.employeeForm.value}))
      }
  }

}
