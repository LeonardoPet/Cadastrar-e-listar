import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from "rxjs"
import { Medico } from './Medico';
import { Especialidade } from './model/Especialidade';
import { Paciente } from './Paciente';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  rotaMedicos = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/medicos.php"
  rotaPaciente =  "https://tiagoifsp.ddns.net/clinicaMedicaJWT/pacientes.php" 
  rotaEspecialidades = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/especialidades.php"
  rotaConsulta = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/consultas.php"

  cadastrarMedico(nome: string, idEspecialidade: number){
    let body = new HttpParams ();
    body = body.set("nome", nome);
    body = body.set("idEspecialidade", idEspecialidade)
    return this.http.post<any>(this.rotaMedicos, body).pipe(tap(res =>{
    }))
  }

  cadastrarPaciente(nome: string, dataNasc: string){
    let body = new HttpParams ();
    body = body.set("nome", nome);
    body = body.set("dataNascimento", dataNasc)
    return this.http.post<any>(this.rotaPaciente, body).pipe(tap(res =>{
    }))
  }

  getEspecialidades() : Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(this.rotaEspecialidades).pipe(tap(res =>{
    })) 
  }

  listarPaciente(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.rotaPaciente).pipe(tap(res =>{ 
    }));
  }

  listarMedico(): Observable<Medico[]>{
    return this.http.get<Medico[]>(this.rotaMedicos).pipe(tap(res =>{ 
    }));
  }

  cadastrarConsulta(medico,paciente,dataConsulta,horaConsulta){
    let body = new HttpParams ();
    body = body.set("idMedico", medico);
    body = body.set("idPaciente", paciente)
    body = body.set("data", dataConsulta + horaConsulta)
    return this.http.post<any>(this.rotaConsulta, body).pipe(tap(res =>{
    }))
    
  }

  constructor(private http: HttpClient) { }
}
