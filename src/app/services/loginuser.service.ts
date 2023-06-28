import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  token!: string
  infotoken!: any
  constructor(public http:HttpClient) { 

  }

  login(email: string, senha: string) {
    return this.http.post('http://localhost:4000/loginUsuario', {
      user_email: email,
      user_senha: senha
    },
    { observe: 'response' }
      ).pipe(
        tap((res:any) => {
          this.token = res.body!.token ?? ''
          localStorage.setItem('token', this.token)
          console.log(localStorage.getItem('token'))
        })
      )
  }

  getLogin(){
    console.log(this.infotoken)
  }

  logout(){
    this.token = ''
    localStorage.removeItem('token')
  }
  
}
