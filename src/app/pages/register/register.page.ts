import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  //aqui se crean las variables:
  //NOMBRE: TIPO - VALOR;
  //NOMBRE = VALOR;
  persona = new FormGroup({
    rut: new FormControl('',[Validators.minLength(9),Validators.maxLength(10),Validators.required]),
    nombre: new FormControl('',[Validators.minLength(3),Validators.required,Validators.pattern("[a-z]{3,5}")]),
    fecha_nacimiento: new FormControl(),
    genero: new FormControl(),
  });


  constructor(private router: Router) { }

  ngOnInit() {
  }

  //podemos crear metodos
  registrar():void{
      //validaciones? llamar un DAO? conversion?

      //console.log sirve para revisar
      console.log(this.persona.value);
      alert("registrado!");
      this.router.navigate(['/login']);
  }

}
