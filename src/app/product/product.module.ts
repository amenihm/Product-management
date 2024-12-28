import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module'; // Import du module de routage
import { ProductsComponent } from './products/products.component'; // Import du composant Products

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule // Déclarez le module de routage ici
  ]
})
export class ProductModule { }
