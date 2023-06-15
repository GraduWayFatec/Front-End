import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal-help',
  templateUrl: './modal-help.component.html',
  styleUrls: ['./modal-help.component.scss']
})
export class ModalHelpComponent {

  constructor(private location: Location) {}

  closeModal() {

    window.location.reload();
  }
}
