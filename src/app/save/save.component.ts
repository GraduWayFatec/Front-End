import { Component, Input, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { InfoCard } from '../shared/card.model';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent {

  confirmed = new EventEmitter();

  constructor(private bsModalRef: BsModalRef) { }

  Save(){
    this.confirmed.emit();
  }
}