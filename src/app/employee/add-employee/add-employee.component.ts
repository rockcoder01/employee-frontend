import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/service/department.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  departments: any[] = [ ];

  constructor(
    private fb: FormBuilder, 
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    private router: Router
    ) {}

  

  ngOnInit(): void {
    this.addEmployeeFormInit();
    this.getAllDepartment();
  }

  addEmployeeFormInit(){
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
      salary: [0, [Validators.required, Validators.min(1)]],
      departments: this.fb.array(
        this.departments.map(() => this.fb.control(false)) // Create checkboxes for each department
      ),
    });
  }


  getAllDepartment(){
     this.departmentService.getAllDepartments().subscribe((departmentsResponse: any[])=>{
        this.departments = departmentsResponse;

        const departmentControls = this.departments.map(() => this.fb.control(false));
        this.employeeForm.setControl('departments', this.fb.array(departmentControls));
    
     })
  }


  get departmentControls(): FormArray {
    return this.employeeForm.get('departments') as FormArray;
  }

  onSubmit(): void {
    const selectedDepartments = this.departments
      .filter((_, i) => this.departmentControls.at(i).value) // Filter selected checkboxes
      .map((dept) => dept.id);

    const formData = {
      ...this.employeeForm.value,
      ...selectedDepartments,
    };

    console.log('Form Data:', formData);
    // Call your service to submit formData to the backend
    this.employeeService.addEmployee(this.employeeForm.value, selectedDepartments[0]).subscribe((res: any)=>{
        console.log("success", res)
        this.employeeForm.reset();
        this.router.navigate([''])
    })
  }
}
