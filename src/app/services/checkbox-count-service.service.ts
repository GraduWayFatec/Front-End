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
  isValueUpdate: Subject<boolean> = new Subject<boolean>();
  closeModalDashboard = new Subject<void>
  closeModal2 = new Subject<void>

  private isValue!: boolean


  setCheckboxCountClass(count: number, email: any) {
    this.checkboxCount = count;
    this.countemail = email
    this.isValue = true
    this.checkboxCountUpdated.next(this.checkboxCount)
    this.EmailUpdate.next(this.countemail)
    this.isValueUpdate.next(this.isValue)
  }

  getCheckboxCountClass() {
    return this.checkboxCount;
  }

  setCheckboxCountStudent(count: number, email: any) {
    this.checkboxCount = count;
    this.countemail = email
    this.isValue = false
    this.checkboxCountUpdated.next(this.checkboxCount)
    this.EmailUpdate.next(this.countemail)
    this.isValueUpdate.next(this.isValue)
  }

  getCheckboxCountStudent() {
    return this.checkboxCount;
  }

  getEmail(){
    return this.countemail
  }

  getIsValue(){
    return this.isValue
  }

  fecharModalDashboard(){
    this.closeModalDashboard.next()
  }

  fecharModal2(){
    this.closeModal2.next();
  }
}
