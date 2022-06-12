import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Medico } from '../Medico';
import { Paciente } from '../Paciente';
import { WebService } from '../web.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  listaMedicos: Medico[]
  listaPacientes: Paciente[]
  formCadastroConsulta!: FormGroup;
  medico: string
  paciente: string
  dataConsulta: string
  horaConsulta: string
  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.listarMedicoConsulta()
    this.listarPacienteConsulta()
    this.formInit()
  }

  formInit(){
    this.formCadastroConsulta = new FormGroup({
      medico : new FormControl(null, [Validators.required]), 
      paciente : new FormControl(null, [Validators.required]),
      dataConsulta: new FormControl(null, [Validators.required]),
      horaConsulta: new FormControl(null, [Validators.required])
    });
  }

  listarMedicoConsulta(){
    this.web.listarMedico().subscribe(res =>{
      this.listaMedicos = res
    }); 
  }

  listarPacienteConsulta(){
    this.web.listarPaciente().subscribe(res =>{
      this.listaPacientes = res
    });
  }


  realizarCadastroConsulta(){
    if(this.formCadastroConsulta.valid){
      let medico = this.formCadastroConsulta.get("medico")!.value
      let paciente = this.formCadastroConsulta.get("paciente")!.value
      let dataConsulta = this.formCadastroConsulta.get("dataConsulta")!.value
      let horaConsulta = this.formCadastroConsulta.get("horaConsulta")!.value


      this.web.cadastrarConsulta(medico,paciente,dataConsulta,horaConsulta).subscribe(res => {
        if(res.id) 
        {
          alert("Consulta cadastrada com sucesso")
        } 
        else
        {
          alert("O Cadastro da consulta falhou")
        }
      });
    }  
  }
 }

