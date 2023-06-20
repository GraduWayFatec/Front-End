import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PrivacyComponent } from '../../privacy/privacy.component';
import { LoginuserService } from 'src/app/services/loginuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  modalRef!: BsModalRef;
  email: string = "";
  senha: string = "";

  constructor(private modalService: BsModalService, public loginuserService: LoginuserService, public router: Router) {}

  
  abrirModal() {
    this.modalRef = this.modalService.show(PrivacyComponent, {class:"privacy-modal"});
  }

  fecharModal() {
    this.modalRef.hide();
  }
  
  login() {
    this.loginuserService.login(this.email, this.senha).subscribe(res => {
      console.log(res);
      this.router.navigate(["/dashboard"])
      // const userId = this.loginuserService.getUserId();
      // console.log(userId)
    })


    
  }
}
