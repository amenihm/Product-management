export class Product 
{ 
id: number; 
name: string; 
image: string = ''; 
categoryId: number; 
description : string; 
price: number; 
brand:string; 
promotion : number; 

constructor(id: number, name: string, categoryId: number, description: string, price: number, brand: string, promotion: number, image: string = '') {
    this.id = id;
    this.name = name;
    this.categoryId = categoryId;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.promotion = promotion;
    this.image = image;
}
}