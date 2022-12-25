export class Employee {
  id: number;
  name: string;
  title: string;
  img: string;
  followed: boolean;

  constructor(id:number,name: string, title: string) {
    this.id=id;
    this.name = name;
    this.title = title;
    this.img = "../assets/employeeImg.png";
    this.followed = false;
  }

}
