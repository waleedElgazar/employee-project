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
    this.followString="UnFollow";
     console.log("pressed",idx, this.followedEmployees, " ",this.followedEmployees.length)
    this.followedEmployees=this.employeeService.followEmployee(idx);
  }
  // unFollow(idx:number){
  //   this.followString="Follow";
  //   console.log("pressed",idx, this.followedEmployees, " ",this.followedEmployees.length)
  //   this.employees[idx].followed=false;
  //   // this.followedEmployees=this.employeeService.unFollowEmployee(idx);
  //   this.followedEmployees=this.employeeService.removeElementFromArray(idx);
  // }

  unFollow(name:string){
    console.log(name,"from un follow")
    this.followString="Follow";
    let idx = this.followedEmployees.findIndex(object => {
      return object.name == name;
    });
    let index =  this.employees.findIndex(object => {
      return object.name === name;
    });
    console.log("pressed",idx, this.followedEmployees, " ",this.followedEmployees.length)
    console.log("pressed",index, this.employees)
    this.employees[index].followed=false;
    // this.followedEmployees=this.employeeService.unFollowEmployee(idx);
    this.followedEmployees=this.employeeService.removeElementFromArray(idx);

  }
  showOnlyFollowed(){
    this.employees=this.followedEmployees;
  }
}
