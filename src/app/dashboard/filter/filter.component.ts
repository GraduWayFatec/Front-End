import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ConectionApiService } from 'src/app/services/conection-api.service';
import { Router } from '@angular/router';
import { CheckboxCountServiceService } from 'src/app/services/checkbox-count-service.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {


  constructor(private location: Location, 
    private conection_api: ConectionApiService, 
    private router: Router, 
    private checkboxService: CheckboxCountServiceService) {}

  
  closeModal() {
    this.checkboxService.fecharModalDashboard()
  }
  
  inputValue_course = '';
  inputValue_year = ''

  atualizarInput_course(checkedValues_course: string[]) {
    this.inputValue_course = checkedValues_course.join(', ');
  }
  atualizarInput_year(checkedValues_year: number[]){
    this.inputValue_year= checkedValues_year.join(',');
  }

  filter(){
    let id_curso:string = ''
    let isValue: boolean = true
    if(this.inputValue_course === 'MAP'){
      id_curso = '1'
    }if(this.inputValue_course === 'Big Data no Agronegócio'){
      id_curso = '3'
    }
    console.log(id_curso, this.inputValue_year)
    this.conection_api.infoFilter(id_curso, this.inputValue_year, isValue)
    this.conection_api.triggerFilterChanged()
    this.checkboxService.fecharModalDashboard()
  }

}

