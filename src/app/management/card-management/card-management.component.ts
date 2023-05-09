import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-management',
  templateUrl: './card-management.component.html',
  styleUrls: ['./card-management.component.scss']
})

export class CardManagementComponent implements OnInit {

  isChecked: boolean = false;

  ngOnInit() {
    const card: HTMLElement = document.getElementById("card")!;
    const card2: HTMLElement = document.getElementById("checkbox")!;
    const checkbox: HTMLInputElement = document.getElementById("checkbox") as HTMLInputElement;


    card.addEventListener("click", () => {
      this.isChecked = !this.isChecked;
      checkbox.checked = this.isChecked
    });
    card2.addEventListener("click", () => {
      this.isChecked = !this.isChecked;
      checkbox.checked = this.isChecked
    });
  }

}