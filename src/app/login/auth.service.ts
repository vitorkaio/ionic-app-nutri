import { Router } from '@angular/router';
import { Usuario } from './../models/usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

    private usuarioAuth: boolean = false;
    public menuEmitter: EventEmitter<boolean> = new EventEmitter();

    constructor(private rota: Router) { }

    public doLogin(usuario: Usuario){
        if(usuario.nome == 'vih' && usuario.senha == '123'){
            this.usuarioAuth = true;

            // Manda pro appComponent uma msg informando se foi logado ou não.
            this.menuEmitter.emit(true);

            this.rota.navigate(['/']);
        }
        else{
            this.usuarioAuth = false;
            this.menuEmitter.emit(false);
        }

    }

}
