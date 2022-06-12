import { Component, OnInit } from '@angular/core';
import { Medico } from '../Medico';
import { Especialidade } from '../model/Especialidade';
import { WebService } from '../web.service';

@Component({
  selector: 'app-medico-listar',
  templateUrl: './medico-listar.component.html',
  styleUrls: ['./medico-listar.component.css']
})
export class MedicoListarComponent implements OnInit {
  listaMedicos: Medico[]
  listaEspecialidades: Especialidade[]
  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.listarMedico()
    this.carregarEspecialidades()
  }
  listarMedico(){
    this.web.listarMedico().subscribe(res =>{
      this.listaMedicos = res
       
    }); 
  }

  carregarEspecialidades() : void{
    this.web.getEspecialidades().subscribe(res => {
      this.listaEspecialidades = res;
    })
  }
   

  
  
}
