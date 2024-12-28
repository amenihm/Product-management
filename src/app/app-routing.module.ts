import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { NotFoundPageComponent } from './not-found-page/not-found-page.component'; // Import NotFoundPageComponent
import { ProductsCategoryComponent } from './products-category/products-category.component'; // Import ProductsCategoryComponent
import { ProductsCategoryQPComponent } from './products-category-q-p/products-category-q-p.component'; // Import ProductsCategoryQPComponent
import { FormProductComponent } from './form-product/form-product.component'; // Import du composant

const routes: Routes = [
   { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: 'about', loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposModule) },
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect from root to HomeComponent
    { path: 'add-product', component: FormProductComponent }, // Définir la route pour ajouter un produit
  { path: 'home', component: HomeComponent }, // Define the route for HomeComponent
  { path: 'products-category/:id', component: ProductsCategoryComponent },
  { path: 'products-category-qp', component: ProductsCategoryQPComponent }, // Define the route for ProductsCategoryQPComponent
  { path: '**', component: NotFoundPageComponent } // Catch-all route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
