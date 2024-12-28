import { Component } from '@angular/core';
import { Product } from '../models/product';  // Assurez-vous que le modèle Product est bien importé

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  product: Product = {
    id: 0,
    name: '',
    image: '',
    categoryId: 0,
    description: '',
    price: 0,
    brand: '',
    promotion: 0
  };

  onSubmit() {
    if (this.product) {
      // Logique pour sauvegarder le produit, par exemple en utilisant un service
      console.log('Product saved:', this.product);
    }
  }
}
