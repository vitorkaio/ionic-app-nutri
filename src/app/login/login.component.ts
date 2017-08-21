import { Usuario } from './../models/usuario';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

    private usuario: Usuario = {};

    constructor(private authService: AuthService) { }

    public ngOnInit() {
    }

    public doLogin(){
        //console.log(this.usuario);
        this.authService.doLogin(this.usuario);
    }

}
