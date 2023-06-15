import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EditUserprofileComponent } from '../edit-userprofile/edit-userprofile.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService, private location: Location) { }

  abrirModal() {
    this.modalRef = this.modalService.show(EditUserprofileComponent, {class: "edit-user-profile-modal"});
  }

  fecharModal() {
    this.modalRef.hide();
  }
  
  closeModal() {

    window.location.reload();
  }
}
