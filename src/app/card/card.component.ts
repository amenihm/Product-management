import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Products'; // Assurez-vous d'importer votre modèle Product

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title!: string;
  @Input() image!: string;
  @Input() description!: string;
  @Input() category!: string;
  @Input() isAvailable!: boolean;
  @Output() addToShortlist = new EventEmitter<Product>();
  
  btnText: string = 'Ajouter';
  isAdded: boolean = false;  // État pour indiquer si le produit est ajouté à la shortlist
  
  onAddToShortlist(): void {
    const product: Product = {
      id: 1,
      title: this.title,
      image: this.image,
      description: this.description,
      promotion: false,
      quantity: this.isAvailable ? 1 : 0,
      categoryId: 1
    };

    this.addToShortlist.emit(product);
    this.isAdded = true;  // Marque le produit comme ajouté
  }
}

  

