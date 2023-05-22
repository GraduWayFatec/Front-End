import { Input, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/shared/card.model';
import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StudentComponent } from '../../student/student.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit{
  @Input() itens!: InfoCard;

  isChecked: boolean = false;
  ngOnInit() {}

  onCardClick() {
    this.isChecked = !this.isChecked;
  }

  evitarAbrirModal(event: Event) {
    event.stopPropagation();
  }

  @Input() outCheck: boolean = false;

  onChange(){}

  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  abrirModal() {
    this.modalRef = this.modalService.show(StudentComponent, {class: "classroom-modal"});
  }

  fecharModal() {
    this.modalRef.hide();
  }

  
}
