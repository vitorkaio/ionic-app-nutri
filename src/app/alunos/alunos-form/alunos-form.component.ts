import { IFormCanDiactive } from './../../guards/iform-canDiactive';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alunos-form',
    templateUrl: './alunos-form.component.html',
    styleUrls: ['./alunos-form.component.sass']
})
export class AlunosFormComponent implements OnInit, IFormCanDiactive {

    public id: number;
    private subs: Subscription;
    private aluno: any;

    private mudouCampo: boolean = false;

    constructor(private route: ActivatedRoute, private alunosService: AlunosService, private rota: Router) { }

    public ngOnInit() {
        this.subs = this.route.params.subscribe((params: any) => {
            this.id = params['id'];
            this.aluno = this.alunosService.getAluno(this.id);
            console.log(this.aluno);
            if(this.aluno == null)
                this.aluno = {};
            
        });
    }

    public ngOnDestroy() {
        this.subs.unsubscribe();
    }

    public onInput(): void {
        this.mudouCampo = true;
    }

    public changeRouter(): boolean {
        if(this.mudouCampo)
            confirm('Tem certeza que deseja sair?');
        return true;
    }

    public podeDesativar(): boolean{
        return this.changeRouter();
    }

}
