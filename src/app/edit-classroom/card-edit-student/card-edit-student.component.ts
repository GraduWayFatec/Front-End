import { Component, Input, OnInit } from '@angular/core';
import { InfoPerson } from 'src/app/shared/card-person.model';

@Component({
  selector: 'app-card-edit-student',
  templateUrl: './card-edit-student.component.html',
  styleUrls: ['./card-edit-student.component.scss']
})
export class CardEditStudentComponent {
  @Input() itens!: InfoPerson;

  isChecked:boolean = false;

  ngOnInit(): void {
    
  }

  onCardClick() {
    this.isChecked = !this.isChecked;
  }
}
