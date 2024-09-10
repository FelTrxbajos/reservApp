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
  public createUsuario(usuario:any):boolean{
    if(this.getUsuario(usuario.rut)== undefined ){
      this.usuarios.push(usuario);
      return true;
    }
    return false;
  }

  public getUsuario(rut:string){
    return this.usuarios.find(elemento=> elemento.rut == rut);
  }

  public getUsuarios():any{
    return this.usuarios;
  }

  public updateUsuarios(rut:string, nuevoUsuario:any){
    const indice = this.usuarios.findIndex(elemento => elemento.rut == rut);
    if(indice ==-1){
      return false;
    }
    this.usuarios[indice] = nuevoUsuario;
    return true;
  }

  public deleteUsuarios(rut:string){
    const indice = this.usuarios.findIndex(elemento => elemento.rut == rut);
    if(indice ==-1){
      return false;
    }
    this.usuarios.splice(indice,1);
    return true;
  }
}
