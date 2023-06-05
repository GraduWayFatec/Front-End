import { Component, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { InfoPerson } from '../shared/card-person.model';

@Component({
  selector: 'app-user-simple',
  templateUrl: './user-simple.component.html',
  styleUrls: ['./user-simple.component.scss']
})
export class UserSimpleComponent {

  @Input() infoperson!:InfoPerson

  constructor(public modalRef: BsModalRef) {}

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

}
