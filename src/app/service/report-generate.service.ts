import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportGenerateService {
  baseUrl = environment.baseUrl + 'reports/generatebydepartment';

  constructor(private http: HttpClient) {}

  generateEmployeeReportByDepartment(departmentId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${departmentId}`, { responseType: 'blob' });
  }


}
