import { IFormCanDiactive } from './iform-canDiactive';
import { AlunosFormComponent } from './../alunos/alunos-form/alunos-form.component';
import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs/Rx'

@Injectable()
export class AlunoGuardsDeactivateService implements CanDeactivate<IFormCanDiactive> {

    constructor() { }

    canDeactivate(
        component: IFormCanDiactive,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        
        /*if(component.mudouCampo)
            return false;*/

        //return component.changeRouter ? component.changeRouter() : true;
        return component.podeDesativar ? component.podeDesativar() : true;
    }
}