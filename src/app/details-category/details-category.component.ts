import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent {
  @Input() description: string =''; // Input property to receive the category description
}
