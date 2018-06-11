import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this._usuarioService.cargarUsuarios()
          .subscribe( usuarios => this.usuarios = usuarios )
  }

  buscarUsuario( termino: string ){
    if (termino.length <= 0){
      this.cargarUsuarios();
      return;
    }
    this._usuarioService.buscarUsuarios(termino)
          .subscribe(usuarios => this.usuarios = usuarios);
  }

  borrarUsuario( usuario: Usuario ) {

    this._usuarioService.borrarUsuario( usuario._id )
            .subscribe( () =>  this.cargarUsuarios() );

  }
}


