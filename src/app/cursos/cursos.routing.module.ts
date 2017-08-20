import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";

const CURSOS_ROUTES: Routes = [
    // Como cursos já foi inserido com lazzy loading no app.routing, não precisa dele aqui.
    // E ainda, para não dar erros todas as rotas devem começar com cursos/
    // { path: 'cursos', component: CursosComponent },
    { path: '', component: CursosComponent },
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { path: ':id', component: CursoDetalheComponent }
];

@NgModule({
    imports: [RouterModule.forChild(CURSOS_ROUTES)],
    exports: [RouterModule]
})
export class CursosRoutingModule {

}