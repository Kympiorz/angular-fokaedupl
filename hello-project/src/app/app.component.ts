import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'witam angulara z pliku app.components.ts';
  // Definicje zmiennych
  name:string = "alex";
  age:number = 8;
  isStudent:boolean = false;
  date:string = "2022-10-03 11:59";
  highlight:string = "yellow";
  isError:boolean = true;
  imagedayfile: string = "angular1.jpg";
  
  // definicja metod

  // to jest programowanie obiektowe 
  sayHello()
  {
    if (this.age >= 18)
      return "hello sir";
    else
      return "jestes dzieckiem";
  }
  incrementAge()
  {
    this.age++;
  }
  errorstatus1()
  {
    if (this.isError == true)
      return "red"
    else
      return "green"
  }
  changeError()
  {
    if (this.isError == true)
      this.isError = false;
    else
    this.isError = true;

    // this.isError = !this.isError
  }
  imagechange(NewFileName: string)
  {
    this.imagedayfile = NewFileName;
  }
}
