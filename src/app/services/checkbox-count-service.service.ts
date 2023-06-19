import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckboxCountServiceService {
  private checkboxCount = 0;
  private countemail!: any
  checkboxCountUpdated: Subject<number> = new Subject<number>();
  EmailUpdate: Subject<any> = new Subject<any>();


  setCheckboxCountClass(count: number, email: any) {
    this.checkboxCount = count;
    this.countemail = email
    this.checkboxCountUpdated.next(this.checkboxCount)
    this.EmailUpdate.next(this.countemail)
  }

  getCheckboxCountClass() {
    return this.checkboxCount;
  }

  setCheckboxCountStudent(count: number, email: any) {
    this.checkboxCount = count;
    this.countemail = email
    this.checkboxCountUpdated.next(this.checkboxCount)
    this.EmailUpdate.next(this.countemail)
  }

  getCheckboxCountStudent() {
    return this.checkboxCount;
  }

  getEmail(){
    return this.countemail
  }
}
