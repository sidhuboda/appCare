import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewEmployee(form) {
    console.log(form.value);

    let newEmployee = {
      employee_name: form.value.employee_name,
      employee_salary: form.value.employee_salary,
      employee_age: form.value.employee_age
    };

    console.log(newEmployee);
    this.employeeService.createEmployee(newEmployee).subscribe((list: any) => {
      console.log(list);
      alert(list.message);
      form.reset();
    });

  }
  BackPage() {
    this.router.navigate(['employeeList']);
  }

}

