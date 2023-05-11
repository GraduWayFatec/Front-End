import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/shared/card.model';

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
  @Input() outCheck: boolean = false;

  onChange(){}


}
