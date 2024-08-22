import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //aqui podemos crear variables, constantes, listas, arreglos, json, etc:
  //NOMBRE_VARIABLE : TIPO_DATO = VALOR;
  titulo: string = "PÁGINA DE LOGIN";
  numero: number =5;
  decimal: number = 5.2;
  existe: boolean = true;
  fecha_hoy: Date = new Date();
  nombres: string[] =["Pedro, Juan, Diego"]; 
  persona: any = {"nombre": "Jeison", "edad": 5};

  //NglModel:
  email: string = "";

  constructor() { }

  ngOnInit() {
  }

}
