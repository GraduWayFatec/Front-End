import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/shared/card.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteComponent } from '../../delete/delete.component';
import { EditClassroomComponent } from '../../edit-classroom/edit-classroom.component';

@Component({
  selector: 'app-card-management',
  templateUrl: './card-management.component.html',
  styleUrls: ['./card-management.component.scss']
})
export class CardManagementComponent implements OnInit {
  constructor(private modalService: BsModalService) {}
  
  @Input() itens!: InfoCard;

  isChecked: boolean = false;

  ngOnInit() {}

  onCardClick() {
    this.isChecked = !this.isChecked;
  }

  modalRef!: BsModalRef;
 
  abrirModal() {
    this.modalRef = this.modalService.show(DeleteComponent);
  }

  abrirModal2() {
    this.modalRef = this.modalService.show(EditClassroomComponent, {class: "edit-classroom-modal"});
  }

  fecharModal() {
    this.modalRef.hide();
  }

  getYearFromDate(dateString: string): number {
    const date = new Date(dateString);
    return date.getFullYear();
  }

  extractNumberFromString(string: string): number | null {
    const numberPattern = /\d+/;
    const matches = string.match(numberPattern);
    if (matches && matches.length > 0) {
      return parseInt(matches[0]);
    }
    return null;
  }
}
