import { Component, ViewChild, ElementRef } from '@angular/core';
import { InfoCard } from '../shared/card.model';
import { ConectionApiService } from '../services/conection-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common'
import { CheckboxCountServiceService } from '../services/checkbox-count-service.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent {
  infocard: InfoCard[] = []

  course_id!: number

  @ViewChild('course', {static: false}) course!: ElementRef;
  @ViewChild('classe', {static: false}) classe!: ElementRef;
  @ViewChild('qnt_student', {static: false}) qnt_student!: ElementRef;
  @ViewChild('date', {static: false}) date!: ElementRef;

  constructor(private conection_api: ConectionApiService, 
    private http: HttpClient,
    private location: Location,
    private checkboxService: CheckboxCountServiceService
    ){

    
  }

  ngOnInit() {
    // this.conection_api.postTurma(this.infocard).subscribe(response => {
    //   console.log(response)
    // })
  }

  inputValue = '';
  inputValue_course = '';

  atualizarInput(checkedValues: string[]) {
    this.inputValue = checkedValues.join(', ');
  }

  atualizarInput_course(checkedValues_course: string[]) {
    this.inputValue_course = checkedValues_course.join(', ');
  }


  OnSubmit() {
    const course = this.course.nativeElement.value;
    const classe = this.classe.nativeElement.value;
    const qnt_student = parseInt(this.qnt_student.nativeElement.value, 10);
    const date = this.date.nativeElement.value;
  
    // const formattedDate = date.toISOString()

    let course_id: number;
    if (course === 'MAP') {
      course_id = 1;
    } else {
      course_id = 3;
    }
  
    // console.log(date)

    const infoCourse = {
      curso_id: course_id,
      turma_nome: classe,
      qtd_aln: qnt_student,
      ano_formatura: date
    };

  
    const formattedInfoCourse = JSON.stringify(infoCourse);

    this.conection_api.postTurma(formattedInfoCourse).subscribe(response => {
      console.log('API response:', response);
      window.location.reload();
    }, error => {
      console.error('API error:', error);
    });
  }

  closeModal() {
    this.checkboxService.fecharModalDashboard()
  }
}
