import { Component, OnInit, group } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


import { Usuario } from '../../models/usuario.model';


import { 
  UsuarioService 
} from '../../services/service.index';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario('', '', '', '', '');

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe( params => {
      let id = params['id'];
      if ( id !== 'nuevo'){
        this.cargarUsuario(id);
      }
    });
   }



  ngOnInit() {

  }

  cargarUsuario( id: string){
    this._usuarioService.cargarUsuario( id )
          .subscribe( usuario => {
            console.log( usuario );
            this.usuario = usuario;
          })
  }

  guardarUsuario( f: NgForm ) {

    console.log( f.valid );
    console.log( f.value );

    if ( f.invalid ) {
      return;
    }

    this._usuarioService.guardarUsuario( this.usuario )
            .subscribe( usuario => {

              this.usuario._id = usuario._id;

              this.router.navigate(['/usuarios']);

            });

  }



}
