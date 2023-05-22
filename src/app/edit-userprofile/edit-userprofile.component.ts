import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SaveComponent } from '../save/save.component';
import { DeleteComponent } from '../delete/delete.component';
import { AcademicEducationComponent } from '../academic-education/academic-education.component';
import { ProfessionalExperienceComponent } from '../professional-experience/professional-experience.component';

@Component({
  selector: 'app-edit-userprofile',
  templateUrl: './edit-userprofile.component.html',
  styleUrls: ['./edit-userprofile.component.scss']
})

export class EditUserprofileComponent {
  modalRef!: BsModalRef;
 
  constructor(private modalService: BsModalService) {}

  abrirModal() {
    this.modalRef = this.modalService.show(SaveComponent);
  }

  abrirModal2() {
    this.modalRef = this.modalService.show(AcademicEducationComponent, {class: "academic-education-modal"});
  }

  abrirModal3() {
    this.modalRef = this.modalService.show(ProfessionalExperienceComponent, {class: "professional-experience-modal"});
  }

  abrirModal4() {
    this.modalRef = this.modalService.show(DeleteComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }
}