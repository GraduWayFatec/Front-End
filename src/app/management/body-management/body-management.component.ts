import { Component, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { CardManagementComponent } from '../card-management/card-management.component';
import { InfoCard } from 'src/app/shared/card.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddClassComponent } from '../../add-class/add-class.component';
import { DeleteComponent } from '../../delete/delete.component';
import { FilterComponent } from '../../dashboard/filter/filter.component';
import { ConectionApiService } from 'src/app/services/conection-api.service';

@Component({
  selector: 'app-body-management',
  templateUrl: './body-management.component.html',
  styleUrls: ['./body-management.component.scss']
})
export class BodyManagementComponent  implements AfterViewInit{
  
  infocard: InfoCard[] = []
  cursos: any[] = []
  
  constructor(private modalService: BsModalService, 
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

  selectAll: boolean = false;

  onAllCardClick() {
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
    this.selectAll = !this.selectAll;
  }
  
  ContChecked(){
    // alert(this.cards.filter(component => component.isChecked).length)
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
