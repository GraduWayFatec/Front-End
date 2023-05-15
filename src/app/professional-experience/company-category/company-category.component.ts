import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/company-category.model'

@Component({
  selector: 'app-company-category',
  templateUrl: './company-category.component.html',
  styleUrls: ['./company-category.component.scss']
})
export class CompanyCategoryComponent implements OnInit {

  checkboxes: Category[] = [
    new Category('Pública'),
    new Category('Privada'),
    new Category('Mista'),
    new Category('Terceiro Setor'),
  ];

    
  constructor(){

  }

  ngOnInit(): void{
    
  } 
}
