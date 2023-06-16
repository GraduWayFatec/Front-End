import { AfterViewInit, ViewChildren, QueryList, OnInit } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { InfoCard } from 'src/app/shared/card.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component } from '@angular/core';
import { MessageComponent } from '../../message/message.component';
import { FilterComponent } from '../../dashboard/filter/filter.component';
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
    this.conection_api.getCurso().subscribe(
      (data: any) => {
        console.log(data);
        this.cursos = data;
        this.mergeCursoData();
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
        card.curso_nome = curso.curso_nome; 
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

  abrirModal2() {
    this.modalRef = this.modalService.show(FilterComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }

  onChangeCheckbox() {
    const count = this.cardsComponents.filter(component => component.isChecked).length
    // const email = this.cardsComponents.filter(component => component.itens.)
    this.checkboxService.setCheckboxCountClass(count)
  }



}
