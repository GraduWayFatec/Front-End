import { Component, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { CardManagementComponent } from '../card-management/card-management.component';
import { InfoCard } from 'src/app/shared/card.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddClassComponent } from '../../add-class/add-class.component';
import { DeleteComponent } from '../../delete/delete.component';

@Component({
  selector: 'app-body-management',
  templateUrl: './body-management.component.html',
  styleUrls: ['./body-management.component.scss']
})
export class BodyManagementComponent  implements AfterViewInit{
  
  infocard: InfoCard[] = [
    new InfoCard(12, "Big Data no Agronegócio", 2018, 37, "../../../assets/img/Big Data.svg","../../../assets/img/big_Data_Active.svg"),
    new InfoCard(13, "Big Data no Agronegócio", 2019, 39, "../../../assets/img/Big Data.svg","../../../assets/img/big_Data_Active.svg"),
    new InfoCard(13, "Mecanização Agronegócio", 2020, 30, "../../../assets/img/MAP.svg","../../../assets/img/MAP_active.svg"),
    new InfoCard(14, "Mecanização Agronegócio", 2021, 20, "../../../assets/img/MAP.svg","../../../assets/img/MAP_active.svg"),
    new InfoCard(15, "Big Data no Agronegócio", 2022, 10, "../../../assets/img/Big Data.svg","../../../assets/img/big_Data_Active.svg"),
    new InfoCard(15, "Mecanização Agronegócio", 2023, 21, "../../../assets/img/MAP.svg","../../../assets/img/MAP_active.svg")
  ]

  constructor(private modalService: BsModalService) {}

  @ViewChildren(CardManagementComponent)
  cards!: QueryList<CardManagementComponent>;

  onAllCardClick() {
    this.cards.forEach(component => {
      if(component.isChecked == false){
        component.onCardClick();
      }
    })
  }
  ContChecked(){
    // alert(this.cards.filter(component => component.isChecked).length)
  }

  
  ngAfterViewInit(): void {
    
  }

  modalRef!: BsModalRef;
 

  abrirModal() {
    this.modalRef = this.modalService.show(AddClassComponent);
  }

  abrirModal2() {
    this.modalRef = this.modalService.show(DeleteComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }
}
