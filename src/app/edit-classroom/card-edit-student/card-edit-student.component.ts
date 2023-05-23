import { Component, Input, OnInit } from '@angular/core';
import { InfoPerson } from 'src/app/shared/card-person.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EditUserprofileComponent } from '../../edit-userprofile/edit-userprofile.component';
import { DeleteComponent } from '../../delete/delete.component';

@Component({
  selector: 'app-card-edit-student',
  templateUrl: './card-edit-student.component.html',
  styleUrls: ['./card-edit-student.component.scss']
})
export class CardEditStudentComponent {
  @Input() itens!: InfoPerson;

  isChecked:boolean = false;

  ngOnInit(): void {
    
  }

  onCardClick() {
    this.isChecked = !this.isChecked;
  }

  constructor(private modalService: BsModalService) {}

  modalRef!: BsModalRef;
 

  abrirModalEdit() {
    this.modalRef = this.modalService.show(EditUserprofileComponent, {class: "edit-user-profile-modal"});
  }

  abrirModalDelete() {
    this.modalRef = this.modalService.show(DeleteComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }
}
