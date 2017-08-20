import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

    private alunos: any[] = [
        {id: 1, nome: 'Vih', email: 'vih@email.com'},
        {id: 2, nome: 'Malu', email: 'malu@email.com'},
        {id: 3, nome: 'Olívia', email: 'olivia@email.com'},
        {id: 4, nome: 'Kaio', email: 'kaio@email.com'}
    ]

    constructor() { }

    public getAllAlunos() {
        return this.alunos;
    }

    public getAluno(id: number){
        let alunos: any[] = this.getAllAlunos();
        for(let i = 0; i < alunos.length; i++){
            let c = alunos[i];
            if(c.id == id) 
                return c;
        }
            
        return null;
    }

}
