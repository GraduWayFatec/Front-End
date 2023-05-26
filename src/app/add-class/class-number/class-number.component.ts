import { Component, OnInit } from '@angular/core';
import { Number } from 'src/app/shared/class-number.model'

@Component({
  selector: 'app-class-number',
  templateUrl: './class-number.component.html',
  styleUrls: ['./class-number.component.scss']
})
export class ClassNumberComponent implements OnInit {

  checkboxes: Number[] = [
    new Number ('1ª'),
    new Number ('2ª'),
    new Number ('3ª'),
    new Number ('4ª'),
    new Number ('5ª'),
    new Number ('6ª'),
    new Number ('7ª'),
    new Number ('8ª'),
    new Number ('9ª'),
    new Number ('10ª'),
    new Number ('11ª'),
    new Number ('12ª'),
    new Number ('13ª'),
    new Number ('14ª'),
    new Number ('15ª'),
    new Number ('16ª'),
    new Number ('17ª'),
    new Number ('18ª'),
    new Number ('19ª'),
    new Number ('20ª'),
    new Number ('21ª'),
    new Number ('22ª'),
    new Number ('23ª'),
    new Number ('24ª'),
    new Number ('25ª'),
    new Number ('26ª'),
    new Number ('27ª'),
    new Number ('28ª'),
    new Number ('29ª'),
    new Number ('30ª'),
    new Number ('31ª'),
    new Number ('32ª'),

  ];

  constructor() {
  
    }

    ngOnInit(): void {

    }
}
