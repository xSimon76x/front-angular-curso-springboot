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

  productSelected: Product = new Product();

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

  addProduct(product: Product): void {
    if (product.id > 0) {
      this.service.update(product).subscribe(
        productUpdate => {
          this.products = this.products.map(prod => {
            if (prod.id == product.id) {
              return {...productUpdate};
            }
            return prod;
          });
        }
      );
    }else {

      this.service.create(product)
      .subscribe(
        productNew => {
          this.products = [...this.products, {...productNew }];
        }
      ); //? Si no nos suscribimos nunca va a ejecutar la peticion al backend
    }
    this.productSelected = new Product();

  }

  onRemoveProduct(id: number): void {
    this.products = this.products.filter( product => product.id != id);
  }

  onUpdateProduct(productRow: Product): void {
    //? si uso productRow, para setea a la variable, se cambiaria en tiempo real, y se veria reflejado en la tabla sin presionar boton de update (mutable)
    //? si coloco el {...productRow} no se cambiaria en tiempo real, y seria necesario presionar el boton de update, se clona el objeto del parametro y se envia (inmutable)
    this.productSelected = {...productRow};
  }

;


}
