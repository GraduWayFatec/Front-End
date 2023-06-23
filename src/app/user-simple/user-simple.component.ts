import { Component, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { InfoPerson } from '../shared/card-person.model';
import { Location } from '@angular/common';
import { CheckboxCountServiceService } from '../services/checkbox-count-service.service';

@Component({
  selector: 'app-user-simple',
  templateUrl: './user-simple.component.html',
  styleUrls: ['./user-simple.component.scss']
})
export class UserSimpleComponent {

  @Input() infoperson!:InfoPerson

  constructor(public modalRef: BsModalRef,  private location: Location, private checkboxService: CheckboxCountServiceService) {}

  fecharModal() {
    this.modalRef.hide();
  }


  Linkedin(){
    window.open(this.infoperson.linkedin, '_blank');
  }
  Instagram(){
    window.open(this.infoperson.instagram, '_blank');
  }
  Lattes(){
    window.open(this.infoperson.lattes, '_blank');
  }
  Facebook(){
    window.open(this.infoperson.facebook, '_blank');
  }
    
  closeModal() {
    this.checkboxService.fecharModal2()
  }


}
