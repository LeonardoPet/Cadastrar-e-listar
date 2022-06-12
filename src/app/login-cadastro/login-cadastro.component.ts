import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.css']
})
export class LoginCadastroComponent implements OnInit {

  formLogin!: FormGroup
  formCadastro!: FormGroup
  sessaoLogada = false
  constructor(private auth: AuthService, private roteador: Router) { }

  ngOnInit(): void {
    this.initForm()
    this.sessaoLogada = this.isLogged()
  }

  onSubmitLogin() : void {
    if(this.formLogin.valid){
      let login = this.formLogin.get("login")!.value
      let senha = this.formLogin.get("senha")!.value
      this.auth.loginUsuario(login, senha).subscribe(res => {
        if(res.token) {
          alert("Login realizado!")
          this.sessaoLogada = this.isLogged()
        }
        else {
          alert("Erro no login")
        }
      })
    }
    else {
      alert("Login ou senha com formato invalido")
    }
  }

  onSubmitCadastrar(){
    if(this.formCadastro.valid){
      let login = this.formCadastro.get("login")!.value
      let senha = this.formCadastro.get("senha")!.value
      this.auth.cadastrarUsuario(login, senha).subscribe(res => {
        if(res.id) {
          alert("Cadastro realizado!")
          this.sessaoLogada = this.isLogged()
        }
        else {
          alert("Erro no login")
        }
      })
    }
    else {
      alert("Login ou senha com formato invalido")
    }

  }

  private initForm() {
    this.formLogin = new FormGroup({
      login : new FormControl(null, [Validators.required]), senha : new FormControl(null)
    });
    this.formCadastro = new FormGroup({
      login : new FormControl(null, [Validators.required]), senha : new FormControl(null)
    });
  }

  isLogged() : boolean {
    if (sessionStorage.getItem("token") != null) {
      return true
    }
    else return false

  }

  deslogar(){
    sessionStorage.clear()
    this.sessaoLogada = this.isLogged()

  }

}
