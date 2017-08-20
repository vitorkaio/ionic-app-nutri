import { CursosRoutingModule } from './cursos.routing.module';
import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ 
        CommonModule,
        CursosRoutingModule
     ],
    declarations: [ 
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
     ],
    bootstrap:    [  ],
    providers: [CursosService]
})
export class CursosModule { }