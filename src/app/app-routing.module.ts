import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { EditarConsultarPacienteComponent } from './editar-consultar-paciente/editar-consultar-paciente.component';
import { EditarConsultarComponent } from './editar-consultar/editar-consultar.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { MedicoCadastrarComponent } from './medico-cadastrar/medico-cadastrar.component';
import { MedicoListarComponent } from './medico-listar/medico-listar.component';
import { PacienteCadastrarComponent } from './paciente-cadastrar/paciente-cadastrar.component';
import { PacienteListarComponent } from './paciente-listar/paciente-listar.component';
import { VerConsultaPacienteComponent } from './ver-consulta-paciente/ver-consulta-paciente.component';
import { VerConsultaComponent } from './ver-consulta/ver-consulta.component';

const routes: Routes = [
  { path: "", component: LoginCadastroComponent},
  { path: "cadastrarPaciente", component: PacienteCadastrarComponent},
  { path: "cadastrarMedico", component: MedicoCadastrarComponent},
  { path: "listarPaciente", component: PacienteListarComponent},
  { path: "listarMedico", component: MedicoListarComponent},
  { path: "adicionaConsulta", component: ConsultaComponent},
  { path: "listarMedico/verConsultaMedica/:id", component:VerConsultaComponent},
  { path: "listarMedico/editarConsultaMedica/:id/:name/:especialidade", component: EditarConsultarComponent},
  { path: "listarPaciente/verConsultaPaciente/:id", component: VerConsultaPacienteComponent},
  { path: "listarPaciente/editarConsultaPaciente/:id", component:EditarConsultarPacienteComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
