import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {EmployeeServiceService} from "../employee-service.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  followString:string="Follow";
  employees: Employee[];
  followedEmployees: Employee[];
  constructor(private employeeService:EmployeeServiceService) {
  }
  ngOnInit(){
    this.employees=this.employeeService.setEmployees();
    this.followedEmployees=[];
  }
  follow(idx:number){
    this.employees[idx].followed=true;
    let employee=this.employees[idx]
    this.followedEmployees.push(employee);
    // this.employees=this.employeeService.followEmployee(idx);
    this.followString="UnFollow";
     console.log("pressed",idx, this.followedEmployees, " ",this.followedEmployees.length)
    // console.log(this.followedEmployees)
  }
  unFollow(idx:number){
    this.removeElementFromArray(idx);
    this.followString="Follow";
  }
  removeElementFromArray(element: number) {
    this.followedEmployees.forEach((value,index)=>{
      if(this.followedEmployees[index].followed) this.followedEmployees.splice(index,1);
    });
  }
  showOnlyFollowed(){
    this.employees=this.followedEmployees;
  }
}
