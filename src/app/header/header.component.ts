import { Component } from '@angular/core';
import { InfoPerson } from '../shared/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  nameList: InfoPerson[] =[
    new InfoPerson("Glaubas")
  ]

}
