import { Component, OnInit } from '@angular/core';
// Importamos servicio usuario
import { UsuariosService } from 'src/app/services/usuarios.service'; 
import { Observable } from 'rxjs';
import { ReqRespResponse } from 'src/app/models/request-respons';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios: any = [];
  
  constructor(private usuariosService: UsuariosService ) { }

  ngOnInit(): void {
    // Invocamos evento CargarUsuarios 
    this.usuariosService.cargarUsuarios()
    .subscribe( usuarios => {
      // Nos subscribimos a la respuesta de lo que se esta recibiendo desde la función cargarUsuarios
      console.log(usuarios);
      
      // Obtengo los datos existentes de usuarios
      this.usuarios = usuarios;
    })
  }

}
