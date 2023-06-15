import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(private location: Location) {}
  closeModal() {

    window.location.reload();
  }

}

