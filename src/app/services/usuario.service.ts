import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //aqui las variables
  usuarios: any[] = [];


  constructor() { }

  //se crea toda la logica
  //DAO
  public createUsuario(usuario:any){}

  public getUsuario(rut:string){}

  public getUsuarios(rut:string, nuevoUsuario:any){}

  public updateUsuarios(rut:string){}

  public deleteUsuarios(){}
}
