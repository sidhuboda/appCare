import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeedetails: any;
  empid = 0;
  constructor(private employeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeService.getEmployeeList().subscribe((list: any) => {
      console.log("data=", list),
        console.log("data=", list.data),
        this.employeedetails = list.data;
    });
  }
  deleteId(id) {
    console.log('Deleted id', id);
    this.empid = id;
    this.employeService.deleteEmployee(this.empid).subscribe((deleteProductdata: any) => {
      {
        console.log('Deleted product', deleteProductdata);
        alert(deleteProductdata.message);
      }
    })
  }
}
