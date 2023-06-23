import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { InfoCard } from '../shared/card.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectionApiService {

  SERVER_URL = 'http://localhost:4000'
  curso_id: string =''
  year: string = ''
  isValueFilter!: boolean
  filterChenged$ = new Subject<void>

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

  public infoFilter(curso_id: string, year: string, isValue: boolean){
    this.curso_id = curso_id
    this.year = year
    this.isValueFilter = isValue
  }

  public filterTurma(){
    return this.http.get(this.SERVER_URL + `/turma/filtrar?curso_id=${this.curso_id}&ano_formatura=${this.year}`)
  }

  public isCheckedFilter(){
    return this.isValueFilter
  }

  triggerFilterChanged(){
    this.filterChenged$.next()
  }

  
  

  public postTurma(turma: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.SERVER_URL + '/novaTurma', turma, { headers: headers })
  }

  public updateTurma(curso:any, curso_id:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(`${this.SERVER_URL}/atualizar/turma/${curso_id}`, curso, { headers: headers})
  }

  public updateUser(user:any, user_id:number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.put(`${this.SERVER_URL}/atualizar/usuario/${user_id}`, user, { headers: headers})
  }

  public getUserTurma(turma_id: any){
    return this.http.get(this.SERVER_URL + `/usuario/:${turma_id}`)
  }

  removeUserTurma(turma_id: any) {
    return this.http.delete(this.SERVER_URL + `/usuario/:${turma_id}`)
  }
}
