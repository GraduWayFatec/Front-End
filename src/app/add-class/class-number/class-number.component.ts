import { Component, OnInit } from '@angular/core';
import { Number } from 'src/app/shared/class-number.model'

@Component({
  selector: 'app-class-number',
  templateUrl: './class-number.component.html',
  styleUrls: ['./class-number.component.scss']
})
export class ClassNumberComponent implements OnInit {

  checkboxes: Number[] = [
    new Number ('1°'),
    new Number ('2°'),
    new Number ('3°'),
    new Number ('4°'),
    new Number ('5°'),
    new Number ('6°'),
    new Number ('7°'),
    new Number ('8°'),
    new Number ('9°'),
    new Number ('10°'),
    new Number ('11°'),
    new Number ('12°'),
    new Number ('13°'),
    new Number ('14°'),
    new Number ('15°'),
    new Number ('16°'),
    new Number ('17°'),
    new Number ('18°'),
    new Number ('19°'),
    new Number ('20°'),
    new Number ('21°'),
    new Number ('22°'),
    new Number ('23°'),
    new Number ('24°'),
    new Number ('25°'),
    new Number ('26°'),

  ];

  constructor() {
  
    }

    ngOnInit(): void {

    }
}
