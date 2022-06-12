import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebService } from '../web.service';

@Component({
  selector: 'app-paciente-cadastrar',
  templateUrl: './paciente-cadastrar.component.html',
  styleUrls: ['./paciente-cadastrar.component.css']
})
export class PacienteCadastrarComponent implements OnInit {
  formCadastroPaciente!: FormGroup;
  dataNasc: string
  nome: string

  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.formInit()
  }
  formInit(){
    this.formCadastroPaciente = new FormGroup({
      nome : new FormControl(null, [Validators.required]), dataNasc : new FormControl(null, [Validators.required])
    });
  }

  realizarCadastroPaciente(){
    if(this.formCadastroPaciente.valid){
      let nome = this.formCadastroPaciente.get("nome")!.value
      let dataNasc = this.formCadastroPaciente.get("dataNasc")!.value
      this.web.cadastrarPaciente(nome,dataNasc).subscribe(res => {
        if(res.id) 
        {
          alert("Paciente cadastrado")
        } 
        else
        {
          alert("O Cadastro falhou")
        }
      });
    }  
  }
}
