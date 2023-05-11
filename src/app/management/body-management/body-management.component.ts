import { Component, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { CardManagementComponent } from '../card-management/card-management.component';

@Component({
  selector: 'app-body-management',
  templateUrl: './body-management.component.html',
  styleUrls: ['./body-management.component.scss']
})
export class BodyManagementComponent  implements AfterViewInit{
  constructor(){}

  @ViewChildren(CardManagementComponent)
  cards!: QueryList<CardManagementComponent>;

  onAllCardClick() {
    this.cards.forEach(component => {
      component.onCardClick();
    })
  }

  ngAfterViewInit(): void {
    
  }
}
