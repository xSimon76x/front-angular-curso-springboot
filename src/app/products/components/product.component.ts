import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  // Inyectar service en el componente
  constructor(private service: ProductService){ }
  
  ngOnInit(): void {
    /** En este caso, el ngOnInit funciona como un useEffect de react */
    /** Ejecuta todo al inicio del componente */
    //? En este caso sirve para ejecutar el servicio que trae la data
    this.service.findAll().subscribe(
      //? Se asigna los products del servicio, y los asigna a los products de la variable de este componente
      products => this.products = products
    );
  }

  addProduct(product: Product) {
    this.products = [...this.products, {...product, id: new Date().getTime() }];
  } 
;


}
