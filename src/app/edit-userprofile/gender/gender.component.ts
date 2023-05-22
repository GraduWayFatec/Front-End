import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/shared/gender.model'

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

  checkboxes: Gender[] = [
    new Gender('Feminino'),
    new Gender('Masculino'),
    new Gender('Não informar'),

  ];

  constructor() {
  }

  ngOnInit(): void {
    
  }

}
