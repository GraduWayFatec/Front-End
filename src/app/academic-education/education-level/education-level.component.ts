import { Component,OnInit } from '@angular/core';
import { School } from 'src/app/shared/education-level.model'

@Component({
  selector: 'app-education-level',
  templateUrl: './education-level.component.html',
  styleUrls: ['./education-level.component.scss']
})
export class EducationLevelComponent implements OnInit {

  checkboxes: School[] = [
    new School('Doutorado'),
    new School('Ensino Fundamental'),
    new School('Ensino Médio'),
    new School('Ensino Superior'),
    new School('Especialização'),
    new School('Livre-Docência'),
    new School('Mestrado'),
    new School('Mestrado Acadêmico'),
    new School('Mestrado Profissional'),
    new School('Mestrado Técnico'),
    new School('Pós-Doutorado'),
    new School('Pós-Graduação'),
    new School('Outro'),
  ];

  constructor(){
  }

  ngOnInit(): void {
    
  }

}