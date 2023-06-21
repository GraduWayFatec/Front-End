import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(private location: Location) {}
  closeModal() {

    window.location.reload();
  }
  inputValue_course = '';
  inputValue_year = ''

  atualizarInput_course(checkedValues_course: string[]) {
    this.inputValue_course = checkedValues_course.join(', ');
  }
  atualizarInput_year(checkedValues_year: number[]){
    this.inputValue_year= checkedValues_year.join(',');
  }

}

