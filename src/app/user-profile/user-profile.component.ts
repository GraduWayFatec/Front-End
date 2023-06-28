import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EditUserprofileComponent } from '../edit-userprofile/edit-userprofile.component';
import { Location } from '@angular/common';
import { ConectionApiService } from '../services/conection-api.service';
import { CheckboxCountServiceService } from '../services/checkbox-count-service.service';
import { InfoPerson } from '../shared/card-person.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  modalRef!: BsModalRef;
  person: InfoPerson [] = []
  user: InfoPerson [] = []

  constructor(private modalService: BsModalService, private conection_api: ConectionApiService, private checkbox_services: CheckboxCountServiceService) { }
  
  ngOnInit(): void {
    this.conection_api.getUser().subscribe((data: any) => {
      console.log(data);
      this.person = data;
      this.user = this.person.filter(component => component.user_id === this.checkbox_services.user_id)
      console.log(this.user)
    }, (error) => {
      console.log(error);
    });
  }

  abrirModal(infoperson: InfoPerson) {
    const initialState: any = {
      infoperson: infoperson
    }
    this.modalRef = this.modalService.show(EditUserprofileComponent, { initialState, class: "edit-user-profile-modal"});
  }

  fecharModal() {
    this.modalRef.hide();
  }
  
  closeModal() {

    window.location.reload();
  }

  getYearFromDate(dateString: string): string {
    const date = new Date(dateString);
    const day = this.padZero(date.getDate());
    const month = this.padZero(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  padZero(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
  }
}
