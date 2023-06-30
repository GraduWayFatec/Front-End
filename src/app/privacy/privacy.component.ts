import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
 
  constructor(private location: Location) {}

  select: boolean = false;

  closeModal() {

    window.location.reload();
  }

}