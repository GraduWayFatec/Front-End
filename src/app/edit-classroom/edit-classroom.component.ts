import { Component,AfterViewInit, ViewChildren,QueryList, HostListener, ElementRef, ViewChild, Input } from '@angular/core';
import { InfoPerson } from '../shared/card-person.model';
import { CardEditStudentComponent } from './card-edit-student/card-edit-student.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SaveComponent } from '../save/save.component';
import { DeleteComponent } from '../delete/delete.component';
import { ConectionApiService } from '../services/conection-api.service';
import { InfoCard } from '../shared/card.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.scss']
})
export class EditClassroomComponent implements AfterViewInit{

  @Input() infocard!: InfoCard;

  infoPerson: InfoPerson[] = []

  qtd_aln!: number
  date!: string
  course_id!: number
  course!:string
  year!: number

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

  cardTurma : boolean = false

  constructor(private modalService: BsModalService,private location: Location, private conection_api: ConectionApiService) {}

  modalRef!: BsModalRef;
 

  abrirModalSave() {
    this.modalRef = this.modalService.show(SaveComponent);
    this.modalRef.content.confirmed.subscribe(() => {
      this.OnSubmit()
    })
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

  ContChecked(){
    // alert(this.cards.filter(component => component.isChecked).length)
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

  abrirModal3() {
    this.modalRef = this.modalService.show(DeleteComponent);
  }

  closeModal() {

    window.location.reload();
  }

  
  OnSubmit() {
    // const course = this.form.value.course;
    // const year = this.form.value.year;
    this.course = this.inputValue_course
    this.year = parseInt(this.inputValue_year)
    let date_sub = new Date(Date.parse(this.date))


    console.log("Curso = " + this.course)
    console.log("Ano = "+ this.year)
    console.log("qnd_aln = " + this.qtd_aln)
    console.log("date = " + date_sub)

    let course_id: number;
    if (this.course === 'MAP') {
      course_id = 1;
    } else {
      course_id = 3;
    }

    if (date_sub === undefined){
      date_sub = new Date(Date.parse(this.infocard.ano_formatura))
    }else{
      date_sub.setFullYear(parseInt(this.infocard.ano_formatura))
    }

    if(Number.isNaN(this.year)){
      console.log("vazio")
    }else{
      date_sub.setFullYear(this.year);
    }
    const isoString = date_sub.toISOString();
    const date_json = isoString.slice(0,10)

    console.log(date_json)

    const infoCourse = {
      curso_id: course_id,
      qtd_aln: this.qtd_aln,
      ano_formatura: date_json
    };


    console.log(infoCourse)
    const formattedInfoCourse = JSON.stringify(infoCourse);
  
    console.log(formattedInfoCourse)
  
    this.conection_api.updateTurma(formattedInfoCourse, this.infocard.turma_id).subscribe(response => {
      console.log('API response:', response);
    }, error => {
      console.error('API error:', error);
    });

    window.location.reload()
    
  }
  
}
