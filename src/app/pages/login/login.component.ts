import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PrivacyComponent } from '../../privacy/privacy.component';
import { LoginuserService } from 'src/app/services/loginuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  modalRef!: BsModalRef;
  email: string = "";
  senha: string = "";

  constructor(private modalService: BsModalService, public loginuserService: LoginuserService) {}

  
  abrirModal() {
    this.modalRef = this.modalService.show(PrivacyComponent, {class:"privacy-modal"});
  }

  fecharModal() {
    this.modalRef.hide();
  }
  
  login() {
    this.loginuserService.login(this.email, this.senha).subscribe(res => {
      console.log(res);
    })
    
  }
}
