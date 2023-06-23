import { Component, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { CardManagementComponent } from '../card-management/card-management.component';
import { InfoCard } from 'src/app/shared/card.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddClassComponent } from '../../add-class/add-class.component';
import { DeleteComponent } from '../../delete/delete.component';
import { FilterComponent } from '../../dashboard/filter/filter.component';
import { ConectionApiService } from 'src/app/services/conection-api.service';
import { CheckboxCountServiceService } from 'src/app/services/checkbox-count-service.service';
import { InfoPerson } from 'src/app/shared/card-person.model';
import { CardStudentComponent } from 'src/app/student/card-student/card-student.component';
import { CardEditStudentComponent } from 'src/app/edit-classroom/card-edit-student/card-edit-student.component';

@Component({
  selector: 'app-body-management',
  templateUrl: './body-management.component.html',
  styleUrls: ['./body-management.component.scss']
})
export class BodyManagementComponent  implements AfterViewInit{
  
  infocard: InfoCard[] = []
  cursos: any[] = []
  checkedFilter!: boolean
  person!: QueryList<InfoPerson>
  search!: string
  filteredPersons: InfoPerson[] = []
  
  constructor(private modalService: BsModalService, 
    private conection_api: ConectionApiService,
    private checkboxService: CheckboxCountServiceService
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

  @ViewChildren(CardManagementComponent)
  cards!: QueryList<CardManagementComponent>;
  @ViewChildren(CardEditStudentComponent)
  cardStudentComponent!: QueryList<CardStudentComponent>

  selectAll: boolean = false;

  onAllCardClick() {
    if(this.search == '' || this.search == undefined){
      if (this.selectAll) {
        // Todos estão selecionados, então vamos deselecionar todos
        this.cards.forEach(component => {
          component.isChecked = false;
        });
      } else {
        // Nem todos estão selecionados, então vamos selecionar todos
        this.cards.forEach(component => {
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

  
  ngAfterViewInit(): void {
    
  }

  modalRef!: BsModalRef;
 

  abrirModal() {
    this.modalRef = this.modalService.show(AddClassComponent, {class: "add-class-modal"});
  }

  abrirModal2() {
    this.modalRef = this.modalService.show(FilterComponent);
  }

  abrirModal3() {
    this.modalRef = this.modalService.show(DeleteComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }
}
