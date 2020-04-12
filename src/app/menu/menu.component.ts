import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
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