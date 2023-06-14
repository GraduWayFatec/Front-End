import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Gender } from 'src/app/shared/gender.model'

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

  checkboxes: Gender[] = [
    new Gender('Feminino', false),
    new Gender('Masculino', false),
    new Gender('Não informar', false),

  ];

  constructor() {
  }

  ngOnInit(): void {
    
  }
  @Output() checkboxChange = new EventEmitter<string[]>();

  checkboxChanged(checkbox_gender: any) {
    if (checkbox_gender.checked) {
      this.checkboxes.forEach((c: any) => {
        if (c !== checkbox_gender) {
          c.checked = false;
        }
      });
    }
    const checkedValues_gender = this.checkboxes
      .filter(c => c.checked)
      .map(c => c.gender);
  
    this.checkboxChange.emit(checkedValues_gender);
  }
}
