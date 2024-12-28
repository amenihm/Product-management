import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[] = [];  // Propriété pour stocker les utilisateurs
  numberOfCustomers: number = 0;  // Variable pour stocker le nombre de "Customer"
  numberOfSoftwareEngineers: number = 0;  // Variable pour stocker le nombre de "Software Engineer"
  isCalculated: boolean = false;  // Variable pour vérifier si les résultats ont été calculés

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Récupérer la liste des utilisateurs
    this.users = this.userService.getAllUsers();
  }

  // Méthode pour calculer le nombre d'utilisateurs en fonction d'un attribut et de sa valeur
  calculateNbUsers(): void {
    if (this.isCalculated) {
      // Si le calcul a déjà été effectué, on ne refait rien
      console.log('Les calculs ont déjà été effectués.');
      return;
    }

    // Appeler la méthode fetchNbInList() pour obtenir le nombre de "Customer"
    this.numberOfCustomers = this.userService.fetchNbInList(this.users, 'accountCategory', 'Customer');
    // Appeler la méthode fetchNbInList() pour obtenir le nombre de "Software Engineer"
    this.numberOfSoftwareEngineers = this.userService.fetchNbInList(this.users, 'profession', 'Software Engineer');
    
    // Afficher les résultats dans la console
    console.log('Nombre d\'utilisateurs avec le compte "Customer" :', this.numberOfCustomers);
    console.log('Nombre d\'utilisateurs avec la profession "Software Engineer" :', this.numberOfSoftwareEngineers);

    // Marquer que les calculs ont été effectués
    this.isCalculated = true;
  }
}
