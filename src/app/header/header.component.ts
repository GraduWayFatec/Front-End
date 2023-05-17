import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  nameList:string ="Glaubas"

  currentDate: Date = new Date();

  constructor(@Inject(LOCALE_ID) private locale: string) {
    registerLocaleData(localePt);
  }

  ngOnInit(): void {
    this.updateCurrentDate();
  }

  updateCurrentDate(): void {
    this.currentDate = new Date();
  }
}