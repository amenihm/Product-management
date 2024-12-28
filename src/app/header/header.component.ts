import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = true;

  ngOnInit(): void {
    // Vous pouvez initialiser d'autres propriétés ici si nécessaire
  }
}
