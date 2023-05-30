import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CheckboxCountServiceService } from '../services/checkbox-count-service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit{
  checkboxCountClass!: number
  

  constructor(public modalRef: BsModalRef, private checkboxCountService: CheckboxCountServiceService) {}

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

  // 


}
