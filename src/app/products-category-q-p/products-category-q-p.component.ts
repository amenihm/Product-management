import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product'; // Import the Product model

@Component({
  selector: 'app-products-category-q-p',
  templateUrl: './products-category-q-p.component.html',
  styleUrls: ['./products-category-q-p.component.css']
})
export class ProductsCategoryQPComponent implements OnInit {
  categoryId: string | null = null; // Property to hold the category ID
  selectedDescription: string | null = null; // Property to hold the selected product description

  listProducts: Product[] = [ // Initialize the listProducts property
    {
      id: 1,
      name: "Réfrigérateur Inox",
      image: "assets/images/refrigerateur-lg.jpg",
      categoryId: 1,
      description: "",
      price: 2800,
      brand: "LG",
      promotion: 0
    },
    {
      id: 2,
      name: "Réfrigérateur LG Samsung Blanc",
      image: "assets/images/refrigerateur_samsung.jpg",
      categoryId: 1,
      description: "",
      price: 2400,
      brand: "Samsung",
      promotion: 0
    },
    {
      id: 3,
      name: "Lave vaisselle",
      image: "assets/images/lave_vaisselle.jpg",
      categoryId: 1,
      description: "",
      price: 1875,
      brand: "BEKO",
      promotion: 0
    },
    {
      id: 4,
      name: "Oppo Phone",
      image: "assets/images/oppo_smart.png",
      categoryId: 4,
      description: "",
      price: 1200,
      brand: "OPPO",
      promotion: 0
    },
    {
      id: 5,
      name: "Hachoir",
      image: "assets/images/hachoir.jpg",
      categoryId: 2,
      description: "",
      price: 120,
      brand: "Moulinex",
      promotion: 0
    },
    {
      id: 6,
      name: "TV LG 50''",
      image: "assets/images/tv_lg.jpg",
      categoryId: 5,
      description: "",
      price: 1800,
      brand: "LG",
      promotion: 0
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the category ID from the query parameters
    this.route.queryParamMap.subscribe(params => {
      this.categoryId = params.get('id'); // Retrieve the ID from the query parameters
      console.log('Category ID from query params:', this.categoryId); // Log the ID for verification
    });
  }

  // Method to filter products by category ID
  get filteredProducts(): Product[] {
    if (!this.categoryId) {
      return []; // Return an empty array if no category ID is set
    }
    return this.listProducts.filter(product => product.categoryId === Number(this.categoryId));
  }
   showDetails(description: string): void {
    this.selectedDescription = description;
  }
} 