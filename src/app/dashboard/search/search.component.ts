import { AfterViewInit, ViewChildren, QueryList, OnInit } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { InfoCard } from 'src/app/shared/card.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component } from '@angular/core';
import { MessageComponent } from '../../message/message.component';
import { count, every, zipAll } from 'rxjs';
import { CheckboxCountServiceService } from 'src/app/services/checkbox-count-service.service';
import { ConectionApiService } from 'src/app/services/conection-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit, OnInit {

  infocard: InfoCard[] = []

  cursos: any[] = []
  
  constructor(private modalService: BsModalService, 
    private checkboxService: CheckboxCountServiceService,
    private conection_api: ConectionApiService
    ) {}

  ngOnInit(){
    this.conection_api.getTurma().subscribe(
      (data: any) => {
        console.log(data)
        this.infocard = data;
        this.foreignTurma()
      }, 
      (error) => {
        console.log(error)
      }
    )
  }

  foreignTurma(){
    // for (const card of this.infocard){
    //   const curso_id = card.curso_id
    //   this.conection_api.getCurso(curso_id).subscribe(
    //     (cursoData: any) =>{
    //       console.log(cursoData);
    //       card.curso_id = cursoData
    //     },
    //     (error) =>{
    //       console.log(error)
    //     }
    //   )
    // }
    this.conection_api.getCurso().subscribe(
      (data: any) => {
        console.log(data);
        this.cursos = data;
        this.mergeCursoData(); // Combina os dados dos cursos com os dados dos InfoCards
      },
      (error) => {
        console.log(error);
      }
    );
  }

  mergeCursoData() {
    for (const card of this.infocard) {
      const cursoId = card.curso_id;
      const curso = this.cursos.find((c) => c.curso_id === cursoId);
      if (curso) {
        card.curso_nome = curso.curso_nome; // Adiciona o campo 'curso_nome' ao InfoCard
      }
    }
  }

  
  

  @ViewChildren(CardsComponent)
  cardsComponents!: QueryList<CardsComponent>;

  selectAll: boolean = false;

  onCardClickAll() {
    if (this.selectAll) {
      // Todos estão selecionados, então vamos deselecionar todos
      this.cardsComponents.forEach(component => {
        component.isChecked = false;
      });
    } else {
      // Nem todos estão selecionados, então vamos selecionar todos
      this.cardsComponents.forEach(component => {
        component.isChecked = true;
      });
    }
    this.selectAll = !this.selectAll;
  }

  ContChecked(){
    // alert(this.cardsComponents.filter(component => component.isChecked).length)
  }

  ngAfterViewInit(): void {}


  modalRef!: BsModalRef;
  

  abrirModal() {
    this.modalRef = this.modalService.show(MessageComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }

  onChangeCheckbox() {
    const count = this.cardsComponents.filter(component => component.isChecked).length
    this.checkboxService.setCheckboxCountClass(count)
  }



}
