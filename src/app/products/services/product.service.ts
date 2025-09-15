import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  private url: string = 'http://localhost:8080/products'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
    return this.http.get(this.url)
      .pipe(
        //? El map se tiene que usar ya que en este caso la respuesta no retorna una lista de productos altiro
        //? sino que lo trae en el embedded, por lo tanto hay que hacer este preprocesamiento
        map( (response: any) => response._embedded.products as Product[]), // la conversion a Product se hace aca, es redundante hacerlo denuevo en el get
      );
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  update (product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product);
  }; 
}
