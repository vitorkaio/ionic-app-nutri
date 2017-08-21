import { AlunoGuardsService } from './guards/aluno.guard';
import { CursoGuardsService } from './guards/curso-guard';
import { AuthGuardsService } from './guards/auth-guards.service';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    // loadChildren define o lazy loading. Tira o cursosModule de todos os module onde teve import.
    { path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule', canActivate: [AuthGuardsService],
    canActivateChild: [CursoGuardsService], canLoad: [AuthGuardsService] },
    { path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule', canActivate: [AuthGuardsService],
    canActivateChild: [AlunoGuardsService] },
    { path: '', component: HomeComponent, canActivate: [AuthGuardsService], canLoad: [AuthGuardsService] },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}