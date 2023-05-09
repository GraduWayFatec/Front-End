import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit{
  isChecked: boolean = false;

  ngOnInit() {
    const card: HTMLElement = document.getElementById("card2")!;
    const card2: HTMLElement = document.getElementById("checkbox2")!;
    const checkbox: HTMLInputElement = document.getElementById("checkbox2") as HTMLInputElement;


    card.addEventListener("click", () => {
      this.isChecked = !this.isChecked;
      checkbox.checked = this.isChecked;
    });
    card2.addEventListener("click", () => {
      this.isChecked = !this.isChecked;
      checkbox.checked = this.isChecked;
    });
  }

}
