import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { InfoCard } from '../shared/card.model';

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

  public postTurma(turma: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.SERVER_URL + '/novaTurma', turma, { headers: headers })
  }

  public updateTurma(curso:any){
    return this.http.put(`${this.SERVER_URL}/atualizar/turma/${curso.turma_id}`, curso)
  }

  public getUserTurma(turma_id: any){
    return this.http.get(this.SERVER_URL + `/usuario/:${turma_id}`)
  }

  removeUserTurma(turma_id: any) {
    return this.http.delete(this.SERVER_URL + `/usuario/:${turma_id}`)
  }
}