import { Component, Input, OnInit } from '@angular/core';
import { InfoPerson } from 'src/app/shared/card-person.model';

@Component({
  selector: 'app-card-student',
  templateUrl: './card-student.component.html',
  styleUrls: ['./card-student.component.scss']
})
export class CardStudentComponent implements OnInit {
  @Input() itens!: InfoPerson;

  isChecked:boolean = false;

  ngOnInit(): void {
    
  }

  onCardClick() {
    this.isChecked = !this.isChecked;
  }
}
