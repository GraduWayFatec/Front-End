import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CheckboxCountServiceService } from '../services/checkbox-count-service.service';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit{
  checkboxCountClass!: number
  email!: any
  

  constructor(public modalRef: BsModalRef,private location: Location, private checkboxCountService: CheckboxCountServiceService) {}

  fecharModal() {
    this.modalRef.hide();
  }

  ngOnInit(): void {
    this.checkboxCountService.checkboxCountUpdated.subscribe((count: number) => {
      this.checkboxCountClass = count;
    });

    // Obter o valor inicial
    this.checkboxCountClass = this.checkboxCountService.getCheckboxCountClass();

    
    
  }
    
  closeModal() {

    window.location.reload();
  }


  // 

  enviarEmail(){
    this.email = this.checkboxCountService.getEmail()
    console.log(this.email)
  }


}
