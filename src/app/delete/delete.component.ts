import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  constructor(private location: Location) {}

  closeModal() {

    window.location.reload();
  }
}
