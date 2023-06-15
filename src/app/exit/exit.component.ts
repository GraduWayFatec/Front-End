import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss']
})
export class ExitComponent {
  constructor(public modalRef: BsModalRef, private location: Location) {}

  fecharModal() {
    this.modalRef.hide();
  }
  closeModal() {

    window.location.reload();
  }
}
