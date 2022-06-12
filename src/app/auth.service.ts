import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "https://tiagoifsp.ddns.net/clinicaMedicaJWT/administradores.php"


  loginUsuario(login: string, senha: string) {
    let body = new HttpParams()
    body = body.set("login", login);
    body = body.set("senha", senha);
    return this.http.post<any>(this.baseUrl, body).pipe(tap(res => {
      if(res["token"]){
        sessionStorage.setItem("token", res["token"]);
      }
    }))
  }

  cadastrarUsuario(login: string, senha: string) {
    let body = new HttpParams();
    body = body.set("login", login);
    body = body.set("senha", senha);
    return this.http.put<any>(this.baseUrl, body).pipe(tap(res => {
      if(res["token"]){
        sessionStorage.setItem("token", res["token"]);
      }
    }))
  }

  constructor(private http: HttpClient) { }
    
}
