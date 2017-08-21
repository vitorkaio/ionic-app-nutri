import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs/Rx'

@Injectable()
export class AlunoGuardsService implements CanActivateChild{

    constructor(private authService: AuthService, private rota: Router) { }

    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        
        console.log('AlunoGuardsService: canActivateChild');
        //console.log(route);
        //console.log(state);

        // Filtro pode ser implementado aqui. Exemplo de filtro
        /*if(state.url.includes('editar'))
            console.log('Tem editar na url!!!');*/

        return true;

    }

}
