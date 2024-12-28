import { Injectable } from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  accountCategory: string;
  email: string;
  password: string;
  picture: string;
  profession: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private list: User[] = [
    {
      id: 1,
      firstName: 'Mila',
      lastName: 'Kunis',
      birthDate: '1999-06-30',
      accountCategory: 'Admin',
      email: 'mila@kunis.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      profession: 'Software Engineer'
    },
    {
      id: 2,
      firstName: 'George',
      lastName: 'Clooney',
      birthDate: '1999-06-30',
      accountCategory: 'Customer',
      email: 'marlon@brando.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      profession: 'Software Engineer'
    },
    {
      id: 3,
      firstName: 'George',
      lastName: 'Clooney',
      birthDate: '1999-06-30',
      accountCategory: 'Customer',
      email: 'marlon@brando.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      profession: 'Software Engineer'
    },
    {
      id: 4,
      firstName: 'Ryan',
      lastName: 'Gossling',
      birthDate: '1999-06-30',
      accountCategory: 'Golden',
      email: 'Ryan@nicholson.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      profession: 'Software Engineer'
    },
    {
      id: 5,
      firstName: 'Robert',
      lastName: 'Downey',
      birthDate: '1999-06-30',
      accountCategory: 'Blocked Account',
      email: 'robert@nicholson.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      profession: 'Software Engineer'
    }
  ];

  // Méthode pour récupérer la liste des utilisateurs
  getAllUsers(): User[] {
    return this.list;
  }

  // Méthode fetchNbInList
fetchNbInList(list: any[], attribute: string, attributeVal: string): number {
  // Filtrer la liste en fonction de l'attribut et de sa valeur
  const filteredList = list.filter(item => item[attribute] === attributeVal);
  return filteredList.length;  // Retourner le nombre d'éléments correspondants
}

}
