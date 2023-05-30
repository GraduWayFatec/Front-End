import { Component,AfterViewInit, ViewChildren,QueryList } from '@angular/core';
import { InfoPerson } from '../shared/card-person.model';
import { CardEditStudentComponent } from './card-edit-student/card-edit-student.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SaveComponent } from '../save/save.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.scss']
})
export class EditClassroomComponent implements AfterViewInit{

  InfoPerson: InfoPerson[] = [
    // new InfoPerson("Daniel Matunoshita"),
    // new InfoPerson("Matheus Resende"),
    // new InfoPerson("Jaqueline Nakagawa"),
    // new InfoPerson("Gabriel Calil"),
    // new InfoPerson("Luis Ricardo"),
    // new InfoPerson("Nao sei quem mais"),
    // new InfoPerson("Glaubas"),
    // new InfoPerson("Douglas"),
    // new InfoPerson("Jucelino"),
    // new InfoPerson("ffsaf ssafsafa"),
    // new InfoPerson("aaaaaaa aaaaaaaa"),
    // new InfoPerson("eeeeee eeeeeeeeeee"),
    // new InfoPerson("daaaaaaa aaaadadad"),
    // new InfoPerson("sssssss ssssssssss"),
    // new InfoPerson("dadafafsf sdgrgewgw"),
    // new InfoPerson("aaaaaaa aaaaaaaa"),
    // new InfoPerson("eeeeeeeee eeeeeeee"),
    // new InfoPerson("daaaaaaa aaaadadad"),
    // new InfoPerson("ssssssss sssssssss"),
    // new InfoPerson("dadafafs fsdgrgewgw")
  ]

  @ViewChildren(CardEditStudentComponent)
  cardStudent!: QueryList<CardEditStudentComponent>;

  selectAll:boolean = false

  onCardClickAll() {
    if (this.selectAll) {
      // Todos estão selecionados, então vamos deselecionar todos
      this.cardStudent.forEach(component => {
        component.isChecked = false;
      });
    } else {
      // Nem todos estão selecionados, então vamos selecionar todos
      this.cardStudent.forEach(component => {
        component.isChecked = true;
      });
    }
    this.selectAll = !this.selectAll;
  }

  ngAfterViewInit(): void {
    
  }

  constructor(private modalService: BsModalService) {}

  modalRef!: BsModalRef;
 

  abrirModalSave() {
    this.modalRef = this.modalService.show(SaveComponent);
  }

  abrirModalDelete() {
    this.modalRef = this.modalService.show(DeleteComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }
}
