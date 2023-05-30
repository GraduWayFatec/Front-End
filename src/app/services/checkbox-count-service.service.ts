import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckboxCountServiceService {
  private checkboxCount = 0;
  checkboxCountUpdated: Subject<number> = new Subject<number>();

  setCheckboxCountClass(count: number) {
    this.checkboxCount = count;
    this.checkboxCountUpdated.next(this.checkboxCount)
  }

  getCheckboxCountClass() {
    return this.checkboxCount;
  }

  setCheckboxCountStudent(count: number) {
    this.checkboxCount = count;
    this.checkboxCountUpdated.next(this.checkboxCount)
  }

  getCheckboxCountStudent() {
    return this.checkboxCount;
  }
}
