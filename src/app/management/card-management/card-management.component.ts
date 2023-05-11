import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/shared/card.model';

@Component({
  selector: 'app-card-management',
  templateUrl: './card-management.component.html',
  styleUrls: ['./card-management.component.scss']
})
export class CardManagementComponent implements OnInit {
  @Input() itens!: InfoCard;
  


  isChecked: boolean = false;

  ngOnInit() {}

  onCardClick() {
    this.isChecked = !this.isChecked;
  }
}
