import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';
import { ReportGenerateService } from 'src/app/service/report-generate.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments: any[] = []

  constructor(private departmentService: DepartmentService, private reportGenerateService: ReportGenerateService) {

  }

  ngOnInit(): void {
    this.getAllDepartment();
  }

  getAllDepartment() {
    this.departmentService.getAllDepartments().subscribe((departmentsResponse: any[]) => {
      this.departments = departmentsResponse;

    })
  }

  downloadReport(departmentId: any){
    this.reportGenerateService.generateEmployeeReportByDepartment(departmentId).subscribe((response: any)=> {
      const url = window.URL.createObjectURL(response);
      const a = document.createElement('a');
      a.href = url;
      a.download = `employee_report_department_${departmentId}.pdf`; 
      a.click();
      window.URL.revokeObjectURL(url); 
    })
  }


}
