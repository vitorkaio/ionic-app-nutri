import { Router } from '@angular/router';
import { Usuario } from './../models/usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

    private usuarioAuth: boolean = false;
    public static menuEmitter: EventEmitter<boolean> = new EventEmitter();

    private user: Usuario = {};

    constructor(private rota: Router) {
     }

    public doLogin(usuario: Usuario){
        if(usuario.nome == 'vih' && usuario.senha == '123'){
            this.usuarioAuth = true;

            // Manda pro appComponent uma msg informando se foi logado ou não.
            AuthService.menuEmitter.emit(true);

            this.user = {};

            // Injeta um usuário na sessão.
            this.user.nome = usuario.nome;
            this.user.senha = usuario.senha;

            sessionStorage.setItem('user', JSON.stringify(this.user));

            this.rota.navigate(['/']);
        }
        else{
            this.usuarioAuth = false;
            AuthService.menuEmitter.emit(false);
            this.user = null;
        }

    }

    public isAuthenticate(){
        return this.usuarioAuth;
    }

    public getUsuarioLogado(): Usuario{
        let u = sessionStorage.getItem('user')

        if(u == null)
            return null;
        
        this.user.nome = JSON.parse(u).nome;
        this.user.senha = JSON.parse(u).senha;
        return this.user;
    }

    public doLogout(){
        sessionStorage.removeItem('user');
        this.rota.navigate(['login']);
    }

}
