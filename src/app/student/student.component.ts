import { Component } from '@angular/core';
import { AfterViewInit, ViewChildren,QueryList } from '@angular/core';
import { InfoPerson } from '../shared/card-person.model';
import { CardStudentComponent } from './card-student/card-student.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserSimpleComponent } from '../user-simple/user-simple.component';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements AfterViewInit{

  InfoPerson: InfoPerson[] = [
    new InfoPerson("Daniel Matunoshita"),
    new InfoPerson("Matheus Rezende"),
    new InfoPerson("Jacqueline Nakagawa"),
    new InfoPerson("Gabriel Calil"),
    new InfoPerson("Luis Ricardo"),
    new InfoPerson("Nao sei quem mais"),
    new InfoPerson("Glaubas"),
    new InfoPerson("Douglas"),
    new InfoPerson("Jucelino"),
    new InfoPerson("ffsafssafsafa"),
    new InfoPerson("aaaaaaaaaaaaaaa"),
    new InfoPerson("eeeeeeeeeeeeeeeee"),
    new InfoPerson("daaaaaaaaaaadadad"),
    new InfoPerson("sssssssssssssssss"),
    new InfoPerson("dadafafsfsdgrgewgw"),
    new InfoPerson("aaaaaaaaaaaaaaa"),
    new InfoPerson("eeeeeeeeeeeeeeeee"),
    new InfoPerson("daaaaaaaaaaadadad"),
    new InfoPerson("sssssssssssssssss"),
    new InfoPerson("dadafafsfsdgrgewgw")
  ]

  @ViewChildren(CardStudentComponent)
  cardStudent!: QueryList<CardStudentComponent>;

  onCardClickAll(){
    this.cardStudent.forEach(component => {
      component.onCardClick();
    })
  }

  ngAfterViewInit(): void {
    
  }

  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  abrirModal() {
    this.modalRef = this.modalService.show(UserSimpleComponent);
  }

  abrirModal2() {
    this.modalRef = this.modalService.show(MessageComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }
}
