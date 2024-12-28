import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Products';  // Import du modèle Product

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [
    { id: 1, title: "Cuisinière", image: "assets/images/grand_electromenagers/cuisiniere.png", description: "699 dt", promotion: false, quantity: 50, categoryId: 1 },
    { id: 2, title: "Réfrigérateur", image: "assets/images/grand_electromenagers/refrigerateur.jpg", description: "1500 dt", promotion: false, quantity: 20, categoryId: 1 },
    { id: 3, title: "Robot Pétrin", image: "assets/images/petit_electromenager/robot_petrin.jpg", description: "430 dt", promotion: false, quantity: 150, categoryId: 2 },
    { id: 4, title: "Fer à repasser", image: "assets/images/petit_electromenager/fer_a_repasser.jpg", description: "130 dt", promotion: false, quantity: 100, categoryId: 2 },
    { id: 5, title: "Oppo", image: "assets/images/smart_phones/Oppo.jpg", description: "920 dt", promotion: false, quantity: 10, categoryId: 4 },
    { id: 6, title: "TV Téléfunkun", image: "assets/images/tv_images_son/tv1.jpg", description: "845 dt", promotion: false, quantity: 50, categoryId: 5 }
  ];

  // Liste des produits ajoutés à la shortlist
  shortList: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    // Code pour initialiser les données si nécessaire
  }

  // Méthode pour ajouter le produit à la shortlist
addProductToShortlist(product: Product): void {
  const idUser = 1; // ID utilisateur, ajustez selon les besoins
  const existingItem = this.shortList.find(item => item.id === product.id);

  if (!existingItem) {
    this.shortList.push(product);
    console.log('Produit ajouté à la shortlist:', product);
  } else {
    console.log('Ce produit est déjà dans la shortlist.');
  }

  console.log('Shortlist mise à jour:', this.shortList);  // Vérifiez la shortlist mise à jour
}

}
