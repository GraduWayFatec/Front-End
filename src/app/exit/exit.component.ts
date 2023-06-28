import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';
import { CheckboxCountServiceService } from '../services/checkbox-count-service.service';
import { LoginuserService } from '../services/loginuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss']
})
export class ExitComponent {
  constructor(public modalRef: BsModalRef, 
    private location: Location, 
    private checkboxService: CheckboxCountServiceService,
    private loginService: LoginuserService,
    private router: Router) {}

  logout() {
    this.modalRef.hide();
    this.loginService.logout()
    this.router.navigate(['/login'])
  }
  closeModal() {
    this.checkboxService.fecharModalDashboard()
  }
}
