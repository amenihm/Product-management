import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: ContactComponent } // Route pour le composant ContactComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Charger les routes spécifiques au module
  exports: [RouterModule]
})
export class ContactRoutingModule { }
