import { Component, OnInit } from '@angular/core';
// Importamos servicio usuario
import { UsuariosService } from 'src/app/services/usuarios.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService ) { }

  ngOnInit(): void {
    // Invocamos evento CargarUsuarios 
    this.usuariosService.cargarUsuarios()
    .subscribe( resp => {
      // Nos subscribimos a la respuesta de lo que se esta recibiendo desde la función cargarUsuarios
      console.log(resp);
    })
  }

}
