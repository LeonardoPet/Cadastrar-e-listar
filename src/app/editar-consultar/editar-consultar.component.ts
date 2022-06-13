import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medico } from '../Medico';
import { WebService } from '../web.service';

@Component({
  selector: 'app-editar-consultar',
  templateUrl: './editar-consultar.component.html',
  styleUrls: ['./editar-consultar.component.css']
})
export class EditarConsultarComponent implements OnInit {
  listaMedicos: Medico[]
  id: number
  name: string
  especialidade:string
  constructor(private web:WebService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listarMedico()
  }

  listarMedico(){
    this.id = this.route.snapshot.params['id']
    this.name = this.route.snapshot.params['name']
    this.especialidade = this.route.snapshot.params['especialidade']
    
    this.web.listarMedico().subscribe(res =>{
      this.listaMedicos = res      
    }); 
  }

  editarMedico(){
      let nome = this.name
      let id = this.id
      let especialidade = this.especialidade
      this.web.editarMedico(nome,id, especialidade).subscribe(res => {
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

