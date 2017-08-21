import { AlunoResolveGuard } from './guards/aluno-resolve.guard';
import { AlunoGuardsDeactivateService } from './../guards/aluno.guard.deactive';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const ALUNOS_ROUTES: Routes = [
    // { path: 'alunos', component: AlunosComponent, children: [
    { path: '', component: AlunosComponent, children: [
        { path: 'novo', component: AlunosFormComponent, canDeactivate: [AlunoGuardsDeactivateService] },
        // Sempre coloque os params no final, pois são hascodes.
        // resolve: Carrega os dados antes do template ser renderizado.
        { path: ':id', component: AlunosDetalheComponent, resolve: {aluno: AlunoResolveGuard} },
        { path: ':id/editar', component: AlunosFormComponent, canDeactivate: [AlunoGuardsDeactivateService] } 
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(ALUNOS_ROUTES)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}