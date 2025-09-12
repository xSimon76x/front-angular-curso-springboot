import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  
   
  private products: Product[] = [
    {
      id: 1,
      name: 'Mesa comedor',
      description: 'Excelente mesa para el comedor',
      price: 700
    },
    {
      id: 2,
      name: 'Teclado Mecanico',
      description: 'Excelente teclado para el escribir de forma mecanica',
      price: 500
    },
  ];

  constructor() { }
}
