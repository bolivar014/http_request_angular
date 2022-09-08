import { Component, OnInit } from '@angular/core';
// Importamos servicio usuario
import { UsuariosService } from 'src/app/services/usuarios.service'; 
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService ) { }

  ngOnInit(): void {
  }

}
