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
import { InfoPerson } from 'src/app/shared/card-person.model';
import { UserSimpleComponent } from 'src/app/user-simple/user-simple.component';
import { CardStudentComponent } from 'src/app/student/card-student/card-student.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit, OnInit {
  isValueTurma!: boolean 
  infocard: InfoCard[] = []
  person!: QueryList<InfoPerson>
  checkedFilter!: boolean
  search!: string
  filteredPersons: InfoPerson[] = []

  cursos: any[] = []
  
  constructor(private modalService: BsModalService, 
    private checkboxService: CheckboxCountServiceService,
    private conection_api: ConectionApiService
    ) {
      
    }

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
    this.conection_api.filterChenged$.subscribe(()=>{
      this.filterChanged()
    })
    
    this.checkboxService.closeModalDashboard.subscribe(()=>{
      this.fecharModal()
    })

    this.conection_api.getUser().subscribe(
      (data: any) => {
        console.log(data)
        this.person = data;
        this.filteredPersons = data
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

  filterCancel(){
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
    this.checkedFilter = false
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
  @ViewChildren(CardStudentComponent)
  cardStudentComponent!: QueryList<CardStudentComponent>
  

  selectAll: boolean = false;

  onCardClickAll() { 
    if(this.search == '' || this.search == undefined){
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
    }else{
      if (this.selectAll) {
        // Todos estão selecionados, então vamos deselecionar todos
        this.cardStudentComponent.forEach(component => {
          component.isChecked = false;
        });
      } else {
        // Nem todos estão selecionados, então vamos selecionar todos
        this.cardStudentComponent.forEach(component => {
          component.isChecked = true;
        });
      }
    }
    
    this.selectAll = !this.selectAll;
    
  }

  FilterPerson(search:string){
    this.filteredPersons = this.person.filter(component => component.user_name.toLowerCase().includes(search.toLowerCase()))
    console.log(this.filteredPersons)
  }

  filterChanged(){
    this.conection_api.filterTurma().subscribe(
      (data: any) => {
        console.log(data)
        this.infocard = data;
        this.foreignTurma()
      },
      (error) => {
        console.log(error)
      }     
    )
    this.checkedFilter = true 
  }

  ngAfterViewInit(): void {}


  modalRef!: BsModalRef;
  

  abrirModal() {
    this.modalRef = this.modalService.show(MessageComponent);
  }

  abrirModal2() {
    this.modalRef = this.modalService.show(FilterComponent);
  }

  abrirModalCardStudent(infoperson: InfoPerson) {
    const initialState: any = {
      infoperson: infoperson
    }
    this.modalRef = this.modalService.show(UserSimpleComponent, { initialState });
  }

  fecharModal() {
    this.modalRef.hide();
  }

  onChangeCheckbox() {
    if(this.search == '' || this.search == undefined){
      const count = this.cardsComponents.filter(component => component.isChecked).length
      const turma_filter = this.cardsComponents.filter(component => component.isChecked).map(component => component.itens.turma_id)
      console.log(turma_filter)
      const email_filter = this.person.filter(component => turma_filter.includes(component.turma_id)).map(component => component.user_email)
      this.checkboxService.setCheckboxCountClass(count, email_filter)
    }else{
      const count = this.cardStudentComponent.filter(component => component.isChecked).length
      const turma_filter = this.cardStudentComponent.filter(component => component.isChecked).map(component => component.itens.turma_id)
      console.log(turma_filter)
      const email_filter = this.person.filter(component => turma_filter.includes(component.turma_id)).map(component => component.user_email)
      this.checkboxService.setCheckboxCountStudent(count, email_filter)
    }
    
    
    
  }
}
