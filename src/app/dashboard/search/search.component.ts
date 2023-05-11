import { AfterViewInit, Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  constructor() {}

  @ViewChildren(CardsComponent)
  cardsComponents!: QueryList<CardsComponent>;

  onCardClickAll() {
    this.cardsComponents.forEach(component => {
      component.onCardClick();
    });
  }


  ngAfterViewInit(): void {}
}
