import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs/Rx'

@Injectable()
export class AuthGuardsService implements CanActivate{

    constructor(private authService: AuthService, private rota: Router) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        console.log(this.authService.isAuthenticate())
        if(this.authService.isAuthenticate()){
            return true;
        }

        this.rota.navigate(['/login']);
        return false;

    }

}
