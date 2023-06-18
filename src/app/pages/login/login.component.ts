import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PrivacyComponent } from '../../privacy/privacy.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  abrirModal() {
    this.modalRef = this.modalService.show(PrivacyComponent, {class:"privacy-modal"});
  }

  
  abrirModal2() {
    this.modalRef = this.modalService.show(ForgotPasswordComponent, {class:"forgot-password-modal"});
  }


  fecharModal() {
    this.modalRef.hide();
  }
}
