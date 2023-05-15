import { AfterViewInit, Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { InfoCard } from 'src/app/shared/card.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {

  infocard: InfoCard[] = [
    new InfoCard(12, "Big Data no Agronegócio", 2018, 37, "../../../assets/img/Big Data.svg"),
    new InfoCard(13, "Big Data no Agronegócio", 2019, 39, "../../../assets/img/Big Data.svg"),
    new InfoCard(13, "Mecanização Agronegócio", 2020, 30, "../../../assets/img/MAP.svg"),
    new InfoCard(14, "Mecanização Agronegócio", 2021, 20, "../../../assets/img/MAP.svg"),
    new InfoCard(15, "Big Data no Agronegócio", 2022, 10, "../../../assets/img/Big Data.svg"),
    new InfoCard(15, "Mecanização Agronegócio", 2023, 21, "../../../assets/img/MAP.svg")
  ]

  
  

  @ViewChildren(CardsComponent)
  cardsComponents!: QueryList<CardsComponent>;

  onCardClickAll() {
    this.cardsComponents.forEach(component => {
      component.onCardClick();
    });
  }


  ngAfterViewInit(): void {}
}
