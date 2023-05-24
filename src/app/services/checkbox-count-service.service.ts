import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckboxCountServiceService {
  private checkboxCount = 0;
  checkboxCountUpdated: Subject<number> = new Subject<number>();

  setCheckboxCount(count: number) {
    this.checkboxCount = count;
    this.checkboxCountUpdated.next(this.checkboxCount)
  }

  getCheckboxCount() {
    return this.checkboxCount;
  }
}
