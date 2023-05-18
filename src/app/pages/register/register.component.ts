import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PrivacyComponent } from '../../privacy/privacy.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  abrirModal() {
    this.modalRef = this.modalService.show(PrivacyComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }
}
