import { Component,AfterViewInit, ViewChildren,QueryList, HostListener, ElementRef, ViewChild, Input } from '@angular/core';
import { InfoPerson } from '../shared/card-person.model';
import { CardEditStudentComponent } from './card-edit-student/card-edit-student.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SaveComponent } from '../save/save.component';
import { DeleteComponent } from '../delete/delete.component';
import { ConectionApiService } from '../services/conection-api.service';
import { InfoCard } from '../shared/card.model';

@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.scss']
})
export class EditClassroomComponent implements AfterViewInit{

  @Input() infocard!: InfoCard;

  infoPerson: InfoPerson[] = []

  @ViewChildren(CardEditStudentComponent)
  cardStudent!: QueryList<CardEditStudentComponent>;

  selectAll:boolean = false

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

  constructor(private modalService: BsModalService, private conection_api: ConectionApiService) {}

  modalRef!: BsModalRef;
 

  abrirModalSave() {
    this.modalRef = this.modalService.show(SaveComponent);
  }

  abrirModalDelete() {
    this.modalRef = this.modalService.show(DeleteComponent);
  }

  fecharModal() {
    this.modalRef.hide();
  }

  
  dropdownPosition = { top: 0, left: 0 };
  @ViewChild('buttonRef') buttonRef!: ElementRef;

  @HostListener('window:scroll')
  onWindowScroll() {
    const buttonElement = this.buttonRef.nativeElement;
    const buttonRect = buttonElement.getBoundingClientRect();
    this.dropdownPosition = {
      top: buttonRect.bottom,
      left: buttonRect.left
    };
  }

  isDropdownVisible5 = false;

  toggleDropdown5() {
    this.isDropdownVisible5 = !this.isDropdownVisible5;
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

  getYear(dateString: string): number {
    const date = new Date(dateString);
    return date.getFullYear();
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

  inputValue_course = '';
  inputValue_year = ''

  atualizarInput_course(checkedValues_course: string[]) {
    this.inputValue_course = checkedValues_course.join(', ');
  }

  atualizarInput_year(checkedValues_year: number[]){
    this.inputValue_year = checkedValues_year.join('')
  }
}
