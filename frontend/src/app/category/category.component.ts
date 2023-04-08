import { Component, Input } from '@angular/core';
import { Content } from '../content';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() title: string;
  @Input() contents: Content[];
}
