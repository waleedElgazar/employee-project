import { Injectable } from '@angular/core';
import {Employee} from "./Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  followedEmployee:Employee[]=[]
  employeeList:Employee[]=[]
  constructor() { }

  setEmployees(){
    this.employeeList[0]=new Employee(0,"Shimaa Yousry","software architecture engineer");
    this.employeeList[1]=new Employee(1,"Mostafa Elgazar","staff software engineer");
    this.employeeList[2]=new Employee(2,"Magued Mamduoh","staff software engineer");
    this.employeeList[3]=new Employee(3,"Abd-Elrahman Amr","software engineer");
    this.employeeList[4]=new Employee(4,"Ahmed Baz","software engineer");
    this.employeeList[5]=new Employee(5,"waleed Reda","software engineer");
    this.employeeList[6]=new Employee(6,"Ahmed Nasr","software engineer");
    this.employeeList[7]=new Employee(7,"Rawan Shehata","software engineer");
    this.employeeList[8]=new Employee(8,"Mostafa Darwish","software engineer");
    return this.employeeList
  }

  followEmployee(index:number):Employee[]{

    this.employeeList[index].followed=true;
    let employee=this.employeeList[index]
    this.followedEmployee.push(employee);
    return this.followedEmployee
  }
  unFollowEmployee(index:number){
    this.employeeList[index].followed=false;
    this.removeElementFromArray(index)
    return this.employeeList;
  }
  removeElementFromArray(element: number) {
    console.log(element," from remove")
    if (element>-1){
      this.followedEmployee.splice(element,1);
    }
    console.log((this.followedEmployee))
    return this.followedEmployee;
  }

}
