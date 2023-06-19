import { Input, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/shared/card.model';
import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StudentComponent } from '../../student/student.component';
import { InfoPerson } from 'src/app/shared/card-person.model';
import { ConectionApiService } from 'src/app/services/conection-api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit{
  @Input() itens!: InfoCard;
  @Input() person!: InfoPerson
  @Input() email!: any


  isChecked: boolean = false;
  ngOnInit() {
    this.conection_api.getUser().subscribe(
      (data: any) => {
        console.log(data)
        this.person = data;
      }, 
      (error) => {
        console.log(error)
      }
    )
    
  }

  onCardClick() {
    this.isChecked = !this.isChecked;
  }

  evitarAbrirModal(event: Event) {
    event.stopPropagation();
  }

  @Input() outCheck: boolean = false;

  onChange(){}

  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService, private conection_api: ConectionApiService) {}

  abrirModal(infocard: InfoCard) {
    const initialState = {
      infocard: infocard
    }
    this.modalRef = this.modalService.show(StudentComponent, { initialState, class: "classroom-modal" });
  }

  fecharModal() {
    this.modalRef.hide();
  }

  getYearFromDate(dateString: string): number {
    const date = new Date(dateString);
    return date.getFullYear();
  }

  extractNumberFromString(string: string): number | null {
    const numberPattern = /\d+/;
    const matches = string.match(numberPattern);
    if (matches && matches.length > 0) {
      return parseInt(matches[0]);
    }
    return null;
  }

  
  test(){
    // this.email = this.person.filter(component => component.turma_id === this.itens.turma_id).map(component => component.user_email)
    // console.log(this.email)
  }
}
