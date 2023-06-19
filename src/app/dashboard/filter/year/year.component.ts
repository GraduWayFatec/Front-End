import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Year } from 'src/app/shared/year.model';


@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {
  
  years: Year[] = [
    new Year(2023, false),
    new Year(2022, false),
    new Year(2021, false),
    new Year(2020, false),
    new Year(2019, false),
    new Year(2018, false),
    new Year(2017, false),
    new Year(2016, false),
    new Year(2015, false),
    new Year(2014, false),
    new Year(2013, false),
    new Year(2012, false),
    new Year(2011, false),
    new Year(2010, false),
  ];

  constructor(){
  }

  ngOnInit(): void {
  }

  @Output() checkboxChange = new EventEmitter<number[]>();

  checkboxChanged(checkbox: any) {
    if (checkbox.checked) {
      this.years.forEach((c: any) => {
        if (c !== checkbox) {
          c.checked = false;
        }
      });
    }
    const checkedValues_year = this.years
      .filter(c => c.checked)
      .map(c => c.year);

    this.checkboxChange.emit(checkedValues_year);
  }
}
