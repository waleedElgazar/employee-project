import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import { FollowedEmployeeListComponent } from './followed-employee-list/followed-employee-list.component';
import { EmployeePipePipe } from './employee-pipe.pipe';



@NgModule({
  declarations: [EmployeeListComponent, FollowedEmployeeListComponent, EmployeePipePipe],
  exports:[
    EmployeeListComponent,
    FollowedEmployeeListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
