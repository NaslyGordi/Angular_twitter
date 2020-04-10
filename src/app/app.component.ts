import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My application Poli-CCT';
  he = 'Julian Andres Vargas Guerrero';
  she = 'Yuli Tatiana Cañon Arias';
  num1 = "6" ;
  num2 = "9" ;
  resultadoSumar: number ;

  constructor(){
    console.log("Constructor Create" );
  }
  sumar () {
     this.resultadoSumar = parseInt(this.num1) +    parseInt(this.num2) ;
  }
}