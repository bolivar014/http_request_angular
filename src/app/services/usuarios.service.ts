import { Injectable } from '@angular/core';
// Importamos httpclient
import { HttpClient } from '@angular/common/http';
import { ReqRespResponse } from '../models/request-respons';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // Importamos constructor http
  constructor( private http: HttpClient ) { 
    console.log('usuarios services logs listo...');
  }

  // Creamos evento para recuperar el get de los usuarios
  cargarUsuarios() {
    const url = "https://reqres.in/api/users";
    return this.http.get<ReqRespResponse>(url);
  }
}
