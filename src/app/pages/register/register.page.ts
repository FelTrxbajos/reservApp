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
    nombre: new FormControl('',[Validators.required,Validators.pattern("[a-z]{3,5}")]),
    fecha_nacimiento: new FormControl('',[Validators.required]),
    //VALIDAR!! FECHA NACIMIENTO
    genero: new FormControl('',[Validators.required]),
    tiene_equipo: new FormControl('no',Validators.required),
    nombre_equipo: new FormControl('',[])
  });
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  



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

  /*public habilitar_boton():boolean{

    if(this.persona.valid){
      return false;
    }
    return true

  }*/

    setResult(ev:any){
      console.log(`Dismissed with role: ${ev.detail.role}`);
    }

}
