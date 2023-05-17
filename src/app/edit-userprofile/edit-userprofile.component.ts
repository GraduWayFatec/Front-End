import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-userprofile',
  templateUrl: './edit-userprofile.component.html',
  styleUrls: ['./edit-userprofile.component.scss']
})
export class EditUserprofileComponent {
  constructor(public modalRef: BsModalRef) {}

  fecharModal() {
    this.modalRef.hide();
  }
}
