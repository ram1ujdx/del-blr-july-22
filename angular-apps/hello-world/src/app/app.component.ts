import { Component, OnInit } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'hello-world',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-first-angular-app';
  comments?:string;
  count=100;
  personName:string='';
  ageValue:number=0;

  

  getButtonClass(age:any){
    if(age<18){
      return 'btn btn-danger'
    }
    return 'btn btn-success'
  }

  getBackgroundColor(age:number){
    if(age<18){
      return 'red'
    }
    return 'black'
  }
 

  personList:Array<any>=[];

  date:Date = new Date();

  ngOnInit(){

    // setInterval(()=>{
    //   this.date = new Date()
    // },1000)

  }
  

  showMessage(){
    alert("Bye..")
    let value = (<HTMLInputElement>(document.getElementById('id'))).value;
  }

  printName(username:string){
    this.personName=username;
  }

  // addPerson(personName:string,age:any,email:string){
  //   let person=new Person(personName,email,age);
  //   this.personList.push(person)
  //   console.log(this.personList)
  // }

}
