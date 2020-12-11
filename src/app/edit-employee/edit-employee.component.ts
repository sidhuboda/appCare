import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeId = 0;

  employeeDetailsbyID;
  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.employeeId = data.id;
      console.log("employeeId", this.employeeId);

      this.employeeService.getEmployeeListById(this.employeeId).subscribe((empid: any) => {
        if(empid.data!=null){
        this.employeeDetailsbyID = empid.data; // get the existing data of the employee of ID
        console.log("employee details by ID", this.employeeDetailsbyID);
        }
      });

    });
  }

  editEmployee(form) {
    console.log(form.value);

    let newEmployee = {
      employee_name: form.value.employee_name,
      employee_salary: form.value.employee_salary,
      employee_age: form.value.employee_age
    };

    this.employeeService.updateEmployee(this.employeeId, newEmployee).subscribe((list: any) => {
      console.log(list);
      alert(list.message);
    });

  }
  BackPage() {
    this.router.navigate(['employeeList']);
  }

}
