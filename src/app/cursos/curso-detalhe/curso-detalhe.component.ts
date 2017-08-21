import { CursosService } from './../cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild, Renderer2, ElementRef } from '@angular/core';
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

    // Pega o elemento que tenha a variavel but no template.
    @ViewChild('but')elemento: ElementRef;

    constructor(private route: ActivatedRoute, private cursosService: CursosService, private rota: Router,
    private ref: ElementRef, private rend: Renderer2) {
        // this.id = this.route.snapshot.params['id'];
    }

    public ngOnInit() {
        this.subs = this.route.params.subscribe((params: any) => {
            this.id = params['id'];
            this.curso = this.cursosService.getCurso(this.id);
            console.log(this.curso);
            if(this.curso == null)
                this.rota.navigate(['/cursos/naoEncontrado']);
            
        });
    }

    public ngOnDestroy() {
        this.subs.unsubscribe();
    }

    // Cria os elementos conforme o clique do botão.
    public criaElemento(){
        const div = this.rend.createElement('div');
        const text = this.rend.createText('Teste!');
      
        this.rend.appendChild(div, text);
        this.rend.setAttribute(div, 'class', 'foi');

        this.rend.appendChild(this.elemento.nativeElement, div);
        console.log(this.ref);
    }

}
