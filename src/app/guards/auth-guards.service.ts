import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from "@angular/router";
import { Observable } from 'rxjs/Rx'

@Injectable()
export class AuthGuardsService implements CanActivate, CanLoad {

    constructor(private authService: AuthService, private rota: Router) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        
        console.log('AuthGuard: canAtivate');
        return this.verificarAcesso();

    }

    public canLoad(route: Route): Observable<boolean> | boolean {
        console.log('AuthGuard: canLoad');
        return this.verificarAcesso();
    }

    private verificarAcesso() {
        console.log('Verifica acesso');
        //console.log(this.authService.getUsuarioLogado());
        // Verifica se já existe um usuário logado, caso sim, não precisa autenticar novamente.
        if(this.authService.getUsuarioLogado() != null)
            return true;

        if (this.authService.isAuthenticate()) {
            return true;
        }

        this.rota.navigate(['/login']);
        return false;
    }

}
