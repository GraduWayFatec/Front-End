import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-simple',
  templateUrl: './user-simple.component.html',
  styleUrls: ['./user-simple.component.scss']
})
export class UserSimpleComponent {
  constructor(public modalRef: BsModalRef) {}

  fecharModal() {
    this.modalRef.hide();
  }
}
