import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { AddEmployeeComponent } from "./employee/add-employee/add-employee.component";
import { DepartmentListComponent } from "./department/department-list/department-list.component";
import { EmployeeDetailsComponent } from "./employee/employee-details/employee-details.component";

const routes: Routes = [
  { path: "", component: EmployeeListComponent },
  { path: "add-employee", component: AddEmployeeComponent },
  { path: "department", component: DepartmentListComponent },
  { path: "employee-details/:id", component: EmployeeDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
