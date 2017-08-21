import { AlunosService } from './../alunos.service';
import { Injectable } from '@angular/core';
import { Aluno } from './../../models/aluno';
import { Observable } from 'rxjs/Rx';
import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

// Carrega os dados antes do template ser renderizado.

@Injectable()
export class AlunoResolveGuard implements Resolve<Aluno> {
    constructor(private alunosServices: AlunosService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

            console.log('AlunoResolveGuard: Resolve');
            
            let id = route.params['id'];

            return this.alunosServices.getAluno(id);
    }
}