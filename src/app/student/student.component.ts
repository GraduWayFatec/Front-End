import { Component, Input, OnInit } from '@angular/core';
import { AfterViewInit, ViewChildren,QueryList } from '@angular/core';
import { InfoPerson } from '../shared/card-person.model';
import { CardStudentComponent } from './card-student/card-student.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserSimpleComponent } from '../user-simple/user-simple.component';
import { MessageComponent } from '../message/message.component';
import { ConectionApiService } from '../services/conection-api.service';
import { InfoCard } from '../shared/card.model';
import { CheckboxCountServiceService } from '../services/checkbox-count-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements AfterViewInit{

  @Input() infocard!: InfoCard

  infoPerson: InfoPerson[] = []

  @ViewChildren(CardStudentComponent)
  cardStudent!: QueryList<CardStudentComponent>;

  selectAll: boolean = false;

  onCardClickAll() {
    if (this.selectAll) {
      // Todos estão selecionados, então vamos deselecionar todos
      this.cardStudent.forEach(component => {
        component.isChecked = false;
      });
    } else {
      // Nem todos estão selecionados, então vamos selecionar todos
      this.cardStudent.forEach(component => {
        component.isChecked = true;
      });
    }
    this.selectAll = !this.selectAll;
  }
  ngAfterViewInit(): void {
    
  }

  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService,private checkboxService: CheckboxCountServiceService, private location: Location, private conection_api: ConectionApiService ) {}

  abrirModal(infoperson: InfoPerson) {
    const initialState: any = {
      infoperson: infoperson
    }
    this.modalRef = this.modalService.show(UserSimpleComponent, { initialState });
  }

  abrirModal2() {
    this.modalRef = this.modalService.show(MessageComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }

  ngOnInit(): void {
    this.conection_api.getUser().subscribe((data: any) => {
      // this.infoPerson = data;
      console.log(data);
      this.infoPerson = data;
    }, 
    (error) => {
      console.log(error)
    });
  }

  extractNumberFromString(string: string): number | null {
    const numberPattern = /\d+/;
    const matches = string.match(numberPattern);
    if (matches && matches.length > 0) {
      return parseInt(matches[0]);
    }
    return null;
  }

  getYearFromDate(dateString: string): string {
    const date = new Date(dateString);
  const day = this.padZero(date.getDate());
  const month = this.padZero(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }

  onChangeCheckbox() {
    const count = this.cardStudent.filter(component => component.isChecked).length
    this.checkboxService.setCheckboxCountStudent(count)
  }
    
  closeModal() {

    window.location.reload();
  }
}
