import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Number } from 'src/app/shared/class-number.model'

@Component({
  selector: 'app-class-number',
  templateUrl: './class-number.component.html',
  styleUrls: ['./class-number.component.scss']
})
export class ClassNumberComponent {


  checkboxes: Number[] = [
    new Number ('1ª', false),
    new Number ('2ª', false),
    new Number ('3ª', false),
    new Number ('4ª', false),
    new Number ('5ª', false),
    new Number ('6ª', false),
    new Number ('7ª', false),
    new Number ('8ª', false),
    new Number ('9ª', false),
    new Number ('10ª', false),
    new Number ('11ª', false),
    new Number ('12ª', false),
    new Number ('13ª', false),
    new Number ('14ª', false),
    new Number ('15ª', false),
    new Number ('16ª', false),
    new Number ('17ª', false),
    new Number ('18ª', false),
    new Number ('19ª', false),
    new Number ('20ª', false),
    new Number ('21ª', false),
    new Number ('22ª', false),
    new Number ('23ª', false),
    new Number ('24ª', false),
    new Number ('25ª', false),
    new Number ('26ª', false),

  ];

  // @Input() value!: string;
  // @Input() checked!: boolean;
  // @Output() checkboxChange = new EventEmitter<boolean>()

  // checkboxChanged(){
  //   this.checkboxChange.emit(this.checked)
  // }

  // constructor() {
  
  //   }

  //   ngOnInit(): void {

  //   }

  @Output() checkboxChange = new EventEmitter<string[]>();

  checkboxChanged(checkbox: any) {
    if (checkbox.checked) {
      this.checkboxes.forEach((c: any) => {
        if (c !== checkbox) {
          c.checked = false;
        }
      });
    }
    const checkedValues = this.checkboxes
      .filter(c => c.checked)
      .map(c => c.number);

    this.checkboxChange.emit(checkedValues);
  }

  test(checkbox: any){
    alert(checkbox)
  }
}
