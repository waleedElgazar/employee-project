export class Employee {

  name: string;
  title: string;
  img: string;
  followed:boolean;

  constructor(name:string,title:string) {
   this.name=name;
   this.title=title;
   this.img="../assets/employeeImg.png";
   this.followed=false;
  }

}
