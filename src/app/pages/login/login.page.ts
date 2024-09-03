import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  password: string = ""

  ngOnInit() {
  }


  //metodo asociado al boton para hacer un login:
  login(){
    if(this.email=="pavel@gmail.com" && this.password=="Jiulliet"){
      this.router.navigate(['/home']);
    }else{
      alert("CORREO O CONTRASEÑA INCORRECTOS!")
    }
  }

  

}
