import { AppRoutingModule } from './app.routing.module';
import { CursosService } from './cursos/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
