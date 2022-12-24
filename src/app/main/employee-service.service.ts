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
    this.employeeList[0]=new Employee("Shimaa Yousry","software architecture engineer");
    this.employeeList[1]=new Employee("Mostafa Elgazar","staff software engineer");
    this.employeeList[2]=new Employee("Magued Mamduoh","staff software engineer");
    this.employeeList[3]=new Employee("waleed Reda","software engineer");
    this.employeeList[4]=new Employee("Mostafa","software engineer");
    return this.employeeList
  }

  followEmployee(index:number):Employee[]{

    this.employeeList[index].followed=true;
    let employee=this.employeeList[index]
    this.employeeList.push(employee);
    // this.employeeList[index].followed=true;
    // this.followedEmployee[0]=this.employeeList[index];
    return this.followedEmployee;
  }
  unFollowEmployee(index:number){
    this.removeElementFromArray(index)
    this.employeeList[index].followed=false;
    return this.employeeList;
  }
  removeElementFromArray(element: number) {
    this.followedEmployee.forEach((value,index)=>{
      if(this.followedEmployee[index].followed) this.followedEmployee.splice(index,1);
    });
    return this.followedEmployee;
  }

}
