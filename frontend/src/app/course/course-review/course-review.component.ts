import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-course-review',
  templateUrl: './course-review.component.html',
  styleUrls: ['./course-review.component.scss']
})
export class CourseReviewComponent implements OnInit {
  @Input() reviews: Review[];

  constructor() { }

  ngOnInit(): void {
  }

  getAverageRating(): number {
    if (!this.reviews || this.reviews.length === 0) {
      return 0;
    }

    let sum = 0;
    for (let i = 0; i < this.reviews.length; i++) {
      sum += this.reviews[i].rating;
    }
    return Math.round((sum / this.reviews.length) * 10) / 10;
  }

}
