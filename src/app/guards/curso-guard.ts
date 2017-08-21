import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs/Rx'

@Injectable()
export class CursoGuardsService implements CanActivateChild{

    constructor(private authService: AuthService, private rota: Router) { }

    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        
        console.log('CursoGuardsService: canActivateChild');

        return true;

    }

}
