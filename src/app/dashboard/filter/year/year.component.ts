import { Component, OnInit } from '@angular/core';
import { Year } from 'src/app/shared/year.model';


@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {
  
  years: Year[] = [
    new Year(2023),
    new Year(2022),
    new Year(2021),
    new Year(2020),
    new Year(2019),
    new Year(2018),
    new Year(2017),
    new Year(2016),
    new Year(2015),
    new Year(2014),
    new Year(2013),
    new Year(2012),
    new Year(2011),
    new Year(2010),
  ];

  constructor(){
  }

  ngOnInit(): void {
  }

}
