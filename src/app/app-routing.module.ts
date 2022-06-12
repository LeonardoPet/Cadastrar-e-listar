import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { MedicoCadastrarComponent } from './medico-cadastrar/medico-cadastrar.component';
import { MedicoListarComponent } from './medico-listar/medico-listar.component';
import { PacienteCadastrarComponent } from './paciente-cadastrar/paciente-cadastrar.component';
import { PacienteListarComponent } from './paciente-listar/paciente-listar.component';

const routes: Routes = [
  { path: "", component: LoginCadastroComponent},
  { path: "cadastrarPaciente", component: PacienteCadastrarComponent},
  { path: "cadastrarMedico", component: MedicoCadastrarComponent},
  { path: "listarPaciente", component: PacienteListarComponent},
  { path: "listarMedico", component: MedicoListarComponent},
  { path:"adicionaConsulta", component: ConsultaComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
