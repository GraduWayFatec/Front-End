import { Component,AfterViewInit, ViewChildren,QueryList } from '@angular/core';
import { InfoPerson } from '../shared/card-person.model';
import { CardStudentComponent } from './card-student/card-student.component';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements AfterViewInit{

  InfoPerson: InfoPerson[] = [
    new InfoPerson("Daniel Matunoshita"),
    new InfoPerson("Matheus Resende"),
    new InfoPerson("Jaqueline Nakagawa"),
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
}
