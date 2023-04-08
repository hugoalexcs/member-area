import { Component } from '@angular/core';

@Component({
  selector: 'app-course-resources',
  templateUrl: './course-resources.component.html',
  styleUrls: ['./course-resources.component.css']
})
export class CourseResourcesComponent {
  resources: any[] = [
    {
      name: 'Lecture Slides',
      url: 'https://example.com/lecture_slides.pdf'
    },
    {
      name: 'Code Examples',
      url: 'https://example.com/code_examples.zip'
    },
    {
      name: 'Reference Material',
      url: 'https://example.com/reference_material.pdf'
    }
  ];
}
