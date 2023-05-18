import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nameList:string ="Glaubas"

  currentDate: Date = new Date();

  ngOnInit(): void {
    this.updateCurrentDate();
  }

  updateCurrentDate(): void {
    this.currentDate = new Date();
  }

  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  abrirModal() {
    this.modalRef = this.modalService.show(UserProfileComponent, {class: "my-big-modal"});
  }

  fecharModal() {
    this.modalRef.hide();
  }
}