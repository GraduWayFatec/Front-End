import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses: Course[] = [

    new Course('Big Data no Agronegócio'),
    new Course('Mecanização em Agricultura de Precisão'),

  ];

  constructor() {
  }

  ngOnInit(): void {

  }

}
