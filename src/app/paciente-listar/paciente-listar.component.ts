import { Component, OnInit } from '@angular/core';
import { Paciente } from '../Paciente';
import { WebService } from '../web.service';

@Component({
  selector: 'app-paciente-listar',
  templateUrl: './paciente-listar.component.html',
  styleUrls: ['./paciente-listar.component.css']
})
export class PacienteListarComponent implements OnInit {
  listaPacientes: Paciente[]
  nome: string
  DataNascimento: string
  DataCadastro: string
  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.listarPaciente()
  }

  listarPaciente(){
    this.web.listarPaciente().subscribe(res =>{
      this.listaPacientes = res
      console.log(res);  
    });
  }

}
