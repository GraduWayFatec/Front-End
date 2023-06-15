import { Component, HostListener, ElementRef, ViewChild, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SaveComponent } from '../save/save.component';
import { DeleteComponent } from '../delete/delete.component';
import { AcademicEducationComponent } from '../academic-education/academic-education.component';
import { ProfessionalExperienceComponent } from '../professional-experience/professional-experience.component';
import { InfoPerson } from '../shared/card-person.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-userprofile',
  templateUrl: './edit-userprofile.component.html',
  styleUrls: ['./edit-userprofile.component.scss']
})

export class EditUserprofileComponent {
  @Input() infoperson!: InfoPerson;
  modalRef!: BsModalRef;
 
  constructor(private modalService: BsModalService,
    private location: Location) {}

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
  atualizarInput_course(checkedValues_course: string[]) {
    this.inputValue_course = checkedValues_course.join(', ');
  }
  atualizarInput(checkedValues: string[]) {
    this.inputValue = checkedValues.join(', ');
  }
  
  closeModal() {

    window.location.reload();
  }

}