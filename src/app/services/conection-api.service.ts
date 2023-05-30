import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConectionApiService {

  SERVER_URL = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  public getTurma(){
    return this.http.get(this.SERVER_URL + '/turma')
  }

  public getCurso(){
    return this.http.get(this.SERVER_URL + '/curso')
  }

  public getUser(){
    return this.http.get(this.SERVER_URL + '/usuario')
  }
}
