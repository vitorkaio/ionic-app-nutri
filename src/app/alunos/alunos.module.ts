import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ CommonModule,
        FormsModule, 
        AlunosRoutingModule 
    ],
    declarations: [ AlunosComponent, AlunosFormComponent, AlunosDetalheComponent ],
    bootstrap:    [  ],
    providers: [ AlunosService ]
})
export class AlunosModule { }