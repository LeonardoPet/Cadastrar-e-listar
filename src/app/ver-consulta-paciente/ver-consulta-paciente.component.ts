import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consulta } from '../Consulta';
import { WebService } from '../web.service';

@Component({
  selector: 'app-ver-consulta-paciente',
  templateUrl: './ver-consulta-paciente.component.html',
  styleUrls: ['./ver-consulta-paciente.component.css']
})
export class VerConsultaPacienteComponent implements OnInit {
  listarConsultas : Consulta[]
  listaConsultasFiltradas: Consulta[]
  id: number;
  constructor(private web: WebService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.listarConsulta(this.id)
  }

  listarConsulta(id){
    this.web.listarConsulta().subscribe(res =>{
      this.listarConsultas = res
      this.listaConsultasFiltradas = this.listarConsultas.filter(consulta =>
        consulta.idPaciente == id
        
      )

    });
  }

  deletarConsulta(id:string){
    let idConsulta = id;
    this.web.removerConsulta(idConsulta).subscribe({
      next: data => {
        alert("Consulta removida com sucesso!"); 
        window.location.reload()
      },
      error: error => {
        alert("Erro ao remover: " + error.message)
      }
    })
  }
}
