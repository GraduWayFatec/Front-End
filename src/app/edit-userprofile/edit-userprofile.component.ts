import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SaveComponent } from '../save/save.component';

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

  fecharModal() {
    this.modalRef.hide();
  }
}