import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Department } from '../models/Department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = environment.baseUrl +  'api/departments'; 

  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

 
  getDepartmentById(departmentId: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${departmentId}`);
  }


  addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department);
  }

  updateDepartment(
    departmentId: number,
    updatedDepartment: Department
  ): Observable<Department> {
    return this.http.put<Department>(
      `${this.apiUrl}/${departmentId}`,
      updatedDepartment
    );
  }

  deleteDepartment(departmentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${departmentId}`);
  }
}
