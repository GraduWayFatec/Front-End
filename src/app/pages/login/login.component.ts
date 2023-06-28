import { Component, QueryList } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PrivacyComponent } from '../../privacy/privacy.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginuserService } from 'src/app/services/loginuser.service';
import { Router } from '@angular/router';
import { ConectionApiService } from 'src/app/services/conection-api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  modalRef!: BsModalRef;
  email: string = "";
  senha: string = "";
  erro!: boolean

  constructor(private modalService: BsModalService, public loginuserService: LoginuserService, private router:Router) {}

  
  abrirModal() {
    this.modalRef = this.modalService.show(PrivacyComponent, {class:"privacy-modal"});
  }
  
  abrirModal2() {
    this.modalRef = this.modalService.show(ForgotPasswordComponent, {class:"forgot-password-modal"});
  }

  fecharModal() {
    this.modalRef.hide();
  }
  
  login() {
    this.loginuserService.login(this.email, this.senha).subscribe(res => {
      console.log(res)
      this.router.navigate(['/dashboard'])
    })
    this.loginuserService.getLogin()
    this.erro = true
    
  }
}
