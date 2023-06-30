import { Component, ViewChild, HostListener, ElementRef } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-academic-education',
  templateUrl: './academic-education.component.html',
  styleUrls: ['./academic-education.component.scss']
})
export class AcademicEducationComponent {

  constructor ( private location: Location) {}

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

  isDropdownVisible7 = false;

  toggleDropdown7() {
    this.isDropdownVisible7 = !this.isDropdownVisible7;
  }

  closeModal() {
    window.location.reload();
  }

}
