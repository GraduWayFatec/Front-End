import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConectionApiService } from '../../app/services/conection-api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  constructor(private location: Location, private modalService: BsModalService) { }

  closeModal() {
    // this.location.back();
    window.location.reload();
  }

  // deleteUser(){

  // }

  // declineDeleteUser() {
  //   this.deleteModalRef.hide()
  // }
}
