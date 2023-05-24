import { AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { InfoCard } from 'src/app/shared/card.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Component } from '@angular/core';
import { MessageComponent } from '../../message/message.component';
import { FilterComponent } from '../../dashboard/filter/filter.component';
import { count, every, zipAll } from 'rxjs';
import { CheckboxCountServiceService } from 'src/app/services/checkbox-count-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {

  infocard: InfoCard[] = [
    new InfoCard(12, "Big Data no Agronegócio", 2018, 37, "../../../assets/img/Big Data.svg","../../../assets/img/big_Data_Active.svg"),
    new InfoCard(13, "Big Data no Agronegócio", 2019, 39, "../../../assets/img/Big Data.svg","../../../assets/img/big_Data_Active.svg"),
    new InfoCard(13, "Mecanização Agronegócio", 2020, 30, "../../../assets/img/MAP.svg","../../../assets/img/MAP_active.svg"),
    new InfoCard(14, "Mecanização Agronegócio", 2021, 20, "../../../assets/img/MAP.svg","../../../assets/img/MAP_active.svg"),
    new InfoCard(15, "Big Data no Agronegócio", 2022, 10, "../../../assets/img/Big Data.svg","../../../assets/img/big_Data_Active.svg"),
    new InfoCard(15, "Mecanização Agronegócio", 2023, 21, "../../../assets/img/MAP.svg","../../../assets/img/MAP_active.svg")
  ]

  
  

  @ViewChildren(CardsComponent)
  cardsComponents!: QueryList<CardsComponent>;

  selectAll: boolean = false;

  onCardClickAll() {
    if (this.selectAll) {
      // Todos estão selecionados, então vamos deselecionar todos
      this.cardsComponents.forEach(component => {
        component.isChecked = false;
      });
    } else {
      // Nem todos estão selecionados, então vamos selecionar todos
      this.cardsComponents.forEach(component => {
        component.isChecked = true;
      });
    }
    this.selectAll = !this.selectAll;
  }

  ContChecked(){
    // alert(this.cardsComponents.filter(component => component.isChecked).length)
  }
  


  ngAfterViewInit(): void {}


  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService, private checkboxService: CheckboxCountServiceService) {}

  abrirModal() {
    this.modalRef = this.modalService.show(MessageComponent);
  }

  abrirModal2() {
    this.modalRef = this.modalService.show(FilterComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }

  onChangeCheckbox() {
    const count = this.cardsComponents.filter(component => component.isChecked).length
    this.checkboxService.setCheckboxCount(count)
  }


}
