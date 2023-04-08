import { Component } from '@angular/core';

@Component({
  selector: 'app-course-certificates',
  templateUrl: './course-certificates.component.html',
  styleUrls: ['./course-certificates.component.css']
})
export class CourseCertificatesComponent {
  certificates: any[] = [
    {
      name: 'Certificate of Completion',
      description: 'This certificate is awarded to John Doe upon completion of the course.',
      date: 'June 20, 2022'
    },
    {
      name: 'Certificate of Achievement',
      description: 'This certificate is awarded to Jane Smith for her outstanding performance in the course.',
      date: 'July 5, 2022'
    }
  ];
}
