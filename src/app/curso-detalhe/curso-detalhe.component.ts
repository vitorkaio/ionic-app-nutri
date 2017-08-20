import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app-curso-detalhe',
    templateUrl: './curso-detalhe.component.html',
    styleUrls: ['./curso-detalhe.component.sass']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

    public id: number;
    private subs: Subscription;
    public curso: any;

    constructor(private route: ActivatedRoute, private cursosService: CursosService, private rota: Router) {
        // this.id = this.route.snapshot.params['id'];
    }

    public ngOnInit() {
        this.subs = this.route.params.subscribe((params: any) => {
            this.id = params['id'];
            this.curso = this.cursosService.getCurso(this.id);
            console.log(this.curso);
            if(this.curso == null)
                this.rota.navigate(['/naoEncontrado']);
            
        });
    }

    public ngOnDestroy() {
        this.subs.unsubscribe();
    }

}
