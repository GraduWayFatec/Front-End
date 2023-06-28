import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ConectionApiService } from '../services/conection-api.service';
import { InfoPerson } from '../shared/card-person.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nameList!: string
  person: InfoPerson[] = []
  ids!: number[]
  name_user!: string[]
  currentDate: Date = new Date();
  email!: string
  user_id!: number

  ngOnInit(): void {
    this.updateCurrentDate();
    this.conection_api.decodeToken();
    this.email = this.conection_api.user_email
    this.conection_api.getUser().subscribe((data: any) => {
      console.log(data);
      this.person = data;
      if (this.person){
        console.log(this.person)
        this.ids = this.person.filter(component => component.user_email === this.email).map(component => component.user_id)
        this.name_user = this.person.filter(component => component.user_email === this.email).map(component => component.user_name)
        console.log(this.ids, this.name_user)
        this.user_id = this.ids[0]
        console.log(this.user_id)
      }
    }, 
    (error) => {
      console.log(error);
    });
    console.log(this.email)
    

  }

  updateCurrentDate(): void {
    this.currentDate = new Date();
  }

  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService, private conection_api: ConectionApiService) {}

  abrirModal() {
    this.modalRef = this.modalService.show(UserProfileComponent, {class: "user-profile-modal"});
  }

  fecharModal() {
    this.modalRef.hide();
  }
}