import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'app';

    private mostrarMenu: boolean = false;

    constructor(private authService: AuthService){}

    public ngOnInit(){
        
    }

}
