import { Component } from '@angular/core';
import { InfoCard } from '../shared/card.model';
import { ConectionApiService } from '../services/conection-api.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent {
  infocard: InfoCard[] = []

  constructor(private conection_api: ConectionApiService){

    
  }

  ngOnInit() {
    this.conection_api.postTurma(this.infocard).subscribe(
      (data: any) => {
        console.log(data)
        this.infocard = data;
      }, 
      (error) => {
        console.log(error)
      }
    )
  }

  inputValue = '';
  inputValue_course = '';
  
  atualizarInput(checkedValues: string[]) {
    this.inputValue = checkedValues.join(', ');
  }

  atualizarInput_course(checkedValues_course: string[]) {
    this.inputValue_course = checkedValues_course.join(', ');
  }
}
