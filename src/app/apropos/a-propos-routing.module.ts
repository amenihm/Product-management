import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './apropos/apropos.component';

const routes: Routes = [
  { path: '', component: AProposComponent } // Route pour le composant AProposComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AProposRoutingModule { }
