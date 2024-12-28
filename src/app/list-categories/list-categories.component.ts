// list-categories.component.ts
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Categorie } from '../models/categorie';
import { CardComponent } from '../card/card.component';
import { shortList } from '../models/shortList';  // Assurez-vous d'importer ShortList
import { Product } from '../models/Products';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  title: string = '';
  categories: Categorie[] = [
    { id: 1, title: "Grand électroménager", image: "assets/images/Grand-electromenager.jpeg", description: "Appareils électroménagers de grande taille.", available: true },
    { id: 2, title: "Petit électroménager", image: "assets/images/Petit_electromenager.jpeg", description: "Appareils électroménagers de petite taille.", available: true },
    { id: 3, title: "Produits informatiques", image: "assets/images/informatiques.jpeg", description: "Ordinateurs, accessoires et logiciels.", available: true },
    { id: 4, title: "Smart Phones", image: "assets/images/Phones.jpeg", description: "Téléphones intelligents de dernière génération.", available: true },
    { id: 5, title: "TV, images et son", image: "assets/images/tv_lg.jpg", description: "Téléviseurs et systèmes audio.", available: true },
    { id: 6, title: "Produits voiture", image: "assets/images/voitures.jpeg", description: "Produits d'entretien pour véhicules.", available: false },
  ];

  selectedDescription: string = '';

  @ViewChildren(CardComponent) cardComponents!: QueryList<CardComponent>;
 ngAfterViewInit(): void {
    // Vous pouvez maintenant accéder à chaque instance de CardComponent via `this.cardComponents`
    this.cardComponents.forEach(card => {
      //card.btnText = 'Nouveau texte'; // Définir la valeur de `btnText` pour chaque CardComponent
    });
  }
  showDescription(description: string): void {
    alert(description);
  }

  showDes(description: string) {
    this.selectedDescription = description;
  }

shortList: shortList[] = [];

handleAddToShortlist(category: Categorie): void {
  const idUser = 1; // ID utilisateur, ajustez selon les besoins

  // Création d'un produit basé sur la catégorie
  const product: Product = {
    id: category.id,
    title: category.title,
    description: category.description,
    image: category.image,
    promotion: false,  // Définissez une valeur par défaut pour la promotion
    quantity: category.available ? 1 : 0, // Définir une quantité en fonction de la disponibilité
    categoryId: category.id // Utilisez l'ID de la catégorie comme ID du produit
  };

  const existingItem = this.shortList.find(item => item.idUser === idUser && item.idElement === product.id && item.typeElement === 'Product');

  if (!existingItem) {
    const newShortListItem = new shortList(
      this.shortList.length + 1, // ID unique
      idUser,                    // id utilisateur
      product.id,                // ID du produit
      'Product'                  // Type de l'élément
    );

    this.shortList.push(newShortListItem);
    console.log('Produit ajouté à la shortlist:', newShortListItem);
  } else {
    console.log('Ce produit est déjà dans la shortlist.');
  }

  console.log('Shortlist mise à jour:', this.shortList);  // Pour vérifier l'actualisation de la shortlist
}





  get filteredCategories(): Categorie[] {
    return this.categories.filter(category => 
      category.title.toLowerCase().includes(this.title.toLowerCase())
    );
  }
}
