import { AlunoGuardsService } from './guards/aluno.guard';
import { CursoGuardsService } from './guards/curso-guard';
import { AuthGuardsService } from './guards/auth-guards.service';
import { AuthService } from './login/auth.service';
// import { AlunosModule } from './alunos/alunos.module';
// import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    // CursosModule,
    // AlunosModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardsService, CursoGuardsService, AlunoGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
