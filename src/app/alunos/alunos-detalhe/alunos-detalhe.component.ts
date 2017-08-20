import { Subscription } from 'rxjs/Rx';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alunos-detalhe',
    templateUrl: './alunos-detalhe.component.html',
    styleUrls: ['./alunos-detalhe.component.sass']
})
export class AlunosDetalheComponent implements OnInit {

    public id: number;
    private subs: Subscription;
    private aluno: any;

    constructor(private route: ActivatedRoute, private alunosService: AlunosService, private rota: Router) { }

    public ngOnInit() {
        this.subs = this.route.params.subscribe((params: any) => {
            this.id = params['id'];
            this.aluno = this.alunosService.getAluno(this.id);
            console.log(this.aluno);
            if(this.aluno == null)
                this.rota.navigate(['/naoEncontrado']);
            
        });
    }

    public ngOnDestroy() {
        this.subs.unsubscribe();
    }

    public editarAluno(){
        this.rota.navigate(['/alunos', this.aluno.id, 'editar']);
    }

}
