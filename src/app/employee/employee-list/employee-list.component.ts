import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: any[] = []
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
   this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAllEmployees().subscribe((employeeList: any) => {
      console.log(employeeList);
      this.employeeList = employeeList;
    })
  }

  employeeDelete(employeeId: number){
    this.employeeService.deleteEmployee(employeeId).subscribe((res: any)=>{
      this.getEmployees();
    })
  }

}
