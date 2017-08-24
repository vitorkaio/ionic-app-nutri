import { AuthService } from './../login/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html',
    styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {

    public cursos: any[];
    public pagina: number;
    private subs: Subscription;

    constructor(private cursosService: CursosService, private route: ActivatedRoute, private rota: Router,
    private autService: AuthService) { }

    public ngOnInit() {
        AuthService.menuEmitter.subscribe((mostrar) => {
            console.log(mostrar);
        })
        this.cursos = this.cursosService.getCursos();
        this.subs = this.route.queryParams.subscribe((query) => {
            this.pagina = query['pagina'];
        });
    }

    public ngOnDestroy() {
        this.subs.unsubscribe();
    }

    public proxima(){
        this.pagina++;
        this.rota.navigate(['/cursos'], {queryParams: {'pagina': this.pagina}});
    }

    public page(page: number){
        this.pagina = page;
        this.rota.navigate(['/cursos'], {queryParams: {'pagina': this.pagina}});
    }

}
