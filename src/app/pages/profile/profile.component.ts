import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  imagenSubir: File;

  constructor(
    public _usuarioService: UsuarioService
  ) {
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit() {
  }

  guardar( usuario: Usuario ) {

    this.usuario.nombre = this.usuario.nombre;
    this.usuario.email = this.usuario.email;

    this._usuarioService.actualizarUsuario( this.usuario )
                 .subscribe();
  }

  seleccionImagen ( archivo: File ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

  }

  cambiarImagen () {

    this._usuarioService.cambiarImagen( this.imagenSubir, this.usuario._id );

  }
}
