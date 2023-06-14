import { Component, HostListener, ElementRef, ViewChild, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SaveComponent } from '../save/save.component';
import { DeleteComponent } from '../delete/delete.component';
import { AcademicEducationComponent } from '../academic-education/academic-education.component';
import { ProfessionalExperienceComponent } from '../professional-experience/professional-experience.component';
import { InfoPerson } from '../shared/card-person.model';
import { InfoCard } from 'src/app/shared/card.model';
import { ConectionApiService } from '../services/conection-api.service';

@Component({
  selector: 'app-edit-userprofile',
  templateUrl: './edit-userprofile.component.html',
  styleUrls: ['./edit-userprofile.component.scss']
})

export class EditUserprofileComponent {
  @Input() infoperson!: InfoPerson;
  infocard: InfoCard[] = []
  modalRef!: BsModalRef;

  cursos: any[] = []

  user_name!: string
  user_email!: string
  user_senha!: string
  email2!: string
  data_nasc!: string
  turma!: string
  curso!: string
  user_telefone!: string
  gender!: string
  cdd_local_trabalho!: string
  est_local_trabalho!: string
  end_local_trabalho!: string
  linkedin!: string
  instagram!: string
  lattes!: string
  facebook!: string

  turma_id!: number

 
  constructor(private modalService: BsModalService, private conection_api: ConectionApiService) {}

  abrirModal() {
    this.modalRef = this.modalService.show(SaveComponent);
  }

  abrirModal2() {
    this.modalRef = this.modalService.show(AcademicEducationComponent, {class: "academic-education-modal"});
  }

  abrirModal3() {
    this.modalRef = this.modalService.show(ProfessionalExperienceComponent, {class: "professional-experience-modal"});
  }

  abrirModal4() {
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

  isDropdownVisible4 = false;
  isDropdownVisible5 = false;
  isDropdownVisible3 = false;

  toggleDropdown4() {
    this.isDropdownVisible4 = !this.isDropdownVisible4;
  }

  toggleDropdown3() {
    this.isDropdownVisible3 = !this.isDropdownVisible3;
  }

  toggleDropdown5() {
    this.isDropdownVisible5 = !this.isDropdownVisible5;
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

  inputValue = ''
  inputValue_course = '';
  inputValue_gender = ''
  atualizarInput_course(checkedValues_course: string[]) {
    this.inputValue_course = checkedValues_course.join(', ');
  }
  atualizarInput_gender(checkedValues_gender: string[]) {
    this.inputValue_gender = checkedValues_gender.join(', ');
  }
  atualizarInput(checkedValues: string[]) {
    this.inputValue = checkedValues.join(', ');
  }


  foreignTurma(curso_id: number): Promise<string>{
    return new Promise((resolve, reject) => {
      this.conection_api.getCurso().subscribe(
        (data: any) => {
          this.cursos = data;
          const nomeDoCurso = data[curso_id-1].curso_nome;
          resolve(nomeDoCurso)
        },
      
        (error) => {
          console.log(error);
          reject(error)
        }
      );
    })
  }

  mergeCursoData() {
    
    for (const card of this.infocard) {
      alert("oaf")
      const cursoId = card.curso_id;
      const curso = this.cursos.find((c) => c.curso_id === cursoId);
      if (curso) {
        card.curso_nome = curso.curso_nome; 
      }
    }
  }

  extractNumberFromString(string: string): number | null {
    const numberPattern = /\d+/;
    const matches = string.match(numberPattern);
    if (matches && matches.length > 0) {
      return parseInt(matches[0]);
    }
    return null;
  }


  OnSubmit(){
    
    this.turma = this.inputValue
    this.curso = this.inputValue_course
    this.gender = this.inputValue_gender

    let id_gender!: number
    if (this.gender === 'Feminino'){
      id_gender = 1
    }if(this.gender === 'Masculino'){
      id_gender = 2
    }if(this.gender === "Não informar"){
      id_gender = 3
    }else{
    }

    this.conection_api.getTurma().subscribe((turmas: any)=>{        
        turmas.forEach((turma:any)=>{
          this.foreignTurma(turma.curso_id).then((nomeDoCurso) => {
          if (this.extractNumberFromString(this.turma) === this.extractNumberFromString(turma.turma_nome) && this.curso === nomeDoCurso){
            this.turma_id = turma.turma_id
            
            return
          }
        })
      })
    })

    const infoUser = {
      user_name: this.user_name,
      user_email: this.user_email,
      user_senha: this.user_senha,
      email2: this.email2,
      data_nasc: this.data_nasc,
      turma_id: this.turma_id,
      user_telefone: this.user_telefone,
      gender: id_gender,
      cdd_local_trabalho: this.cdd_local_trabalho,
      est_local_trabalho: this.est_local_trabalho,
      end_local_trabalho: this.end_local_trabalho,
      linkedin: this.linkedin,
      instagram: this.instagram,
      lattes: this.lattes,
      facebook: this.facebook
    }


    console.log(infoUser)
    const formattedInfoUser = JSON.stringify(infoUser);
  
    console.log(formattedInfoUser)

    this.conection_api.updateUser(formattedInfoUser, this.infoperson.user_id).subscribe(response => {
      console.log('API response: ', response)
    }, error => {
      console.error('API error: ', error)
    }

    )
  }
}