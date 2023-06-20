import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs';
import jwtDecode, { JwtDecodeOptions } from 'jwt-decode' 

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private isAuthenticated: boolean = false;
  private userId: string = '';

  constructor(public http:HttpClient) { }

  login(email: string, senha: string) {
    return this.http.post<any>('http://localhost:4000/loginUsuario', {
      user_email: email,
      user_senha: senha
    }).pipe(
      tap((response) => {
        if (response.token) {
          const decodedToken = jwtDecode(response.token)
          console.log(decodedToken);

        }
      })
    );
  }

  logado(userId: string) {
    // this.isAuthenticated = true;
    this.userId = userId;
    // console.log(this.isAuthenticated);
    console.log(this.userId);
  }

  getUserId(): string {
    return this.userId;
  }


}
