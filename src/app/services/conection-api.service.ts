import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { InfoCard } from '../shared/card.model';
import { Subject } from 'rxjs';
import { LoginuserService } from './loginuser.service';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class ConectionApiService {

  SERVER_URL = 'http://localhost:4000'
  curso_id: string =''
  year: string = ''
  isValueFilter!: boolean
  filterChenged$ = new Subject<void>
  headers!: HttpHeaders
  user_email!: string
  
  constructor(private http: HttpClient, private loginServices: LoginuserService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    this.setTokenHeader()
  }

  private setTokenHeader(){
    const token = localStorage.getItem('token');
    if (token) {
      this.headers = this.headers.set('x-access-token', token);
    }
  }

  public decodeToken(){
    const token = localStorage.getItem('token');
    if (token){
      try{
        const decodedToken = jwt_decode(token) as { user_email?: string };
        this.user_email = decodedToken.user_email ?? '';
        console.log(decodedToken)
        console.log(this.user_email)
      } catch (error){
        console.error('Erro ao decodificar o token:', error)
      }
    }
  }

  public getTurma(){
    return this.http.get(this.SERVER_URL + '/turma', { headers: this.headers })
    
  }

  public getCurso(){
    return this.http.get(this.SERVER_URL + '/curso', { headers: this.headers })
  }

  public getUser(){
    return this.http.get(this.SERVER_URL + '/usuario', { headers: this.headers })
  }

  public infoFilter(curso_id: string, year: string, isValue: boolean){
    this.curso_id = curso_id
    this.year = year
    this.isValueFilter = isValue
  }

  public filterTurma(){
    return this.http.get(this.SERVER_URL + `/turma/filtrar?curso_id=${this.curso_id}&ano_formatura=${this.year}`, {headers: this.headers })
  }

  public isCheckedFilter(){
    return this.isValueFilter
  }

  triggerFilterChanged(){
    this.filterChenged$.next()
  }

  
  

  public postTurma(turma: any){
    return this.http.post(this.SERVER_URL + '/novaTurma', turma, { headers: this.headers })
  }

  public updateTurma(curso:any, curso_id:number){
    return this.http.put(`${this.SERVER_URL}/atualizar/turma/${curso_id}`, curso, { headers: this.headers})
  }

  public updateUser(user:any, user_id:number){
    
    return this.http.put(`${this.SERVER_URL}/atualizar/usuario/${user_id}`, user, { headers: this.headers})
  }

  public getUserTurma(user_id: any){
    return this.http.get(this.SERVER_URL + `/usuario/${user_id}`)
  }

  removeUserTurma(turma_id: any) {
    return this.http.delete(this.SERVER_URL + `/usuario/:${turma_id}`)
  }
}
