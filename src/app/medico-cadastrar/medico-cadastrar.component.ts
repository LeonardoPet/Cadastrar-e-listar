import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Especialidade } from '../model/Especialidade';
import { WebService } from '../web.service';

@Component({
  selector: 'app-medico-cadastrar',
  templateUrl: './medico-cadastrar.component.html',
  styleUrls: ['./medico-cadastrar.component.css']
})
export class MedicoCadastrarComponent implements OnInit {
  formCadastroMedico!: FormGroup;
  especialidade: number
  nome: string
  listaEspecialidades: Especialidade[]
  sessaoLogada : boolean

  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.formInit()
    this.carregarEspecialidades()
  }

  formInit(){
    this.formCadastroMedico = new FormGroup({
      nome : new FormControl(null, [Validators.required]), especialidade : new FormControl(null, [Validators.required])
    });
  }

  realizarCadastroMedico(){
    if(this.formCadastroMedico.valid){
      let nome = this.formCadastroMedico.get("nome")!.value
      this.web.cadastrarMedico(nome, this.especialidade).subscribe(res => {
        if(res.id) 
        {
          alert("Médico cadastrado com sucesso")
        } 
        else
        {
          alert("O cadastro falhou")
        }
      });
    }  
  }
  
  escolheEspecialidade(event: any){
    this.especialidade = event.target.value
    console.log(this.especialidade)
  }

  carregarEspecialidades() : void{
    this.web.getEspecialidades().subscribe(res => {
      this.listaEspecialidades = res;
      console.log(res)
    })

  }

}
