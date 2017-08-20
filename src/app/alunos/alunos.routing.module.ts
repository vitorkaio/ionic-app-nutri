import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const ALUNOS_ROUTES: Routes = [
    // { path: 'alunos', component: AlunosComponent, children: [
    { path: '', component: AlunosComponent, children: [
        { path: 'novo', component: AlunosFormComponent },
        // Sempre coloque os params no final, pois são hascodes.
        { path: ':id', component: AlunosDetalheComponent },
        { path: ':id/editar', component: AlunosFormComponent } 
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(ALUNOS_ROUTES)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}