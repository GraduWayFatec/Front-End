import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  constructor(public http:HttpClient) { }

  login(email: string, senha: string) {
    return this.http.post('http://localhost:4000/loginUsuario', {
      user_email: email,
      user_senha: senha
    })
  }
}
