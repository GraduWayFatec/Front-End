import { Component, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ExitComponent } from '../exit/exit.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  modalRef!: BsModalRef;
  @Input() btn_disable!: boolean;
  @Input() btn_disable2!: boolean;

  constructor(private modalService: BsModalService) {}

  abrirModal() {
    this.modalRef = this.modalService.show(ExitComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }

  // isButtonSelected = true;

  // toggleButtonSelection() {
  //   this.isButtonSelected = !this.isButtonSelected;
    
  // }

  // buttons = [
  //   { label: 'btn-dashboard', isButtonSelected: true },
  //   { label: 'btn-management', isButtonSelected: false },
  // ];

  // selectButton(button: { label: string; isButtonSelected: boolean; }) {
  //   this.buttons.forEach(b => {
  //     if (b.label === button.label) {
  //       b.isButtonSelected = true;
  //     } else {
  //       b.isButtonSelected = false;
  //     }
  //   });
  // }

  


}

