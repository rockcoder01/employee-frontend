import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment.baseUrl + 'api/employees';
  constructor(private http: HttpClient) {}

  // Get all employees
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  // Get an employee by ID
  getEmployeeById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${employeeId}`);
  }

  // Add a new employee
  addEmployee(employee: Employee, departmentId: number): Observable<Employee> {
    const url = `${this.baseUrl}?departmentId=${departmentId}`;
    return this.http.post<Employee>(url, employee);
  }

  // Update an employee
  updateEmployee(employeeId: number, updatedEmployee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${employeeId}`, updatedEmployee);
  }

  // Delete an employee
  deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${employeeId}`);
  }
}
