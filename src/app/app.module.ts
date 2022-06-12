import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteCadastrarComponent } from './paciente-cadastrar/paciente-cadastrar.component';
import { PacienteListarComponent } from './paciente-listar/paciente-listar.component';
import { MedicoCadastrarComponent } from './medico-cadastrar/medico-cadastrar.component';
import { MedicoListarComponent } from './medico-listar/medico-listar.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './log.interceptor';
import { VerConsultaComponent } from './ver-consulta/ver-consulta.component';
import { EditarConsultarComponent } from './editar-consultar/editar-consultar.component';
import { EditarConsultarPacienteComponent } from './editar-consultar-paciente/editar-consultar-paciente.component';
import { VerConsultaPacienteComponent } from './ver-consulta-paciente/ver-consulta-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteCadastrarComponent,
    PacienteListarComponent,
    MedicoCadastrarComponent,
    MedicoListarComponent,
    ConsultaComponent,
    LoginCadastroComponent,
    VerConsultaComponent,
    EditarConsultarComponent,
    EditarConsultarPacienteComponent,
    VerConsultaPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
