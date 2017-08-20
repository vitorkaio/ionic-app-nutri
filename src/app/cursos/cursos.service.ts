import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    constructor() { }

    public getCursos() {
        return [
            {id: 1, nome: 'angular 2'},
            {id: 2, nome: 'express js'},
            {id: 3, nome: 'Django'}
        ];
    }

    public getCurso(id: number) {
        let cursos: any[] = this.getCursos();
        for(let i = 0; i < cursos.length; i++){
            let c = cursos[i];
            if(c.id == id) 
                return c;
        }
            
        return null;
    }

}
