import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent  implements OnInit {
  employee: any; 
  
  isFullScreen = false;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id'); // Get the id from the URL
    if (employeeId) {
      this.employeeService.getEmployeeById(Number(employeeId)).subscribe((employeeData) => {
        this.employee = employeeData;
      });
    }
  }


}
