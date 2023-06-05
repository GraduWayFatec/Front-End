import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses: Course[] = [

    new Course('Big Data no Agronegócio', false),
    new Course('MAP', false),

  ];

  constructor() {
  }

  ngOnInit(): void {

  }
  @Output() checkboxChange = new EventEmitter<string[]>();

  checkboxChanged(checkbox_course: any) {
    if (checkbox_course.checked) {
      this.courses.forEach((c: any) => {
        if (c !== checkbox_course) {
          c.checked = false;
        }
      });
    }
    const checkedValues_course = this.courses
      .filter(c => c.checked)
      .map(c => c.course);

    this.checkboxChange.emit(checkedValues_course);
  }
}
