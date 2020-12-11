import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  userUrl = '/api/v1/employees';

  productUrl = 'http://dummy.restapiexample.com/api/v1/employees';

  getEmployeeList() {
    return this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees');
  }
  getEmployeeListById(employeeId) {
    return this.httpClient.get('http://dummy.restapiexample.com/api/v1/employee/' + employeeId);
  }

  createEmployee(productBody) {
    return this.httpClient.post('http://dummy.restapiexample.com/api/v1/create', productBody); // return an observable
  }
  updateEmployee(employeeId, productBody): Observable<Employee> {
    const productUrl = 'http://dummy.restapiexample.com/public/api/v1/update/' + employeeId;
    return this.httpClient.put<Employee>(productUrl, productBody); // return an observable
  }

  deleteEmployee(employeeId): Observable<Employee> {
    const productUrl = 'http://dummy.restapiexample.com/public/api/v1/delete/' + employeeId;
    return this.httpClient.delete<Employee>(productUrl); // return an observable
  }
}


