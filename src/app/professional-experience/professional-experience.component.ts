import { Component, ViewChild, HostListener, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent {

  constructor(private location: Location) {}

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
