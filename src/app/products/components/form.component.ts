import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Input() product: Product = new Product();

  @Output() newProductEvent = new EventEmitter();

  onSubmit(productForm: NgForm): void {
    //? De esta manera this.product obtiene la data del formulario, 
    //? gracias a la asociacion del input con el [(ngModel)] que llama al atributo del objeto product
    console.log(this.product)

    if (productForm.valid) {
      //? Emitimos el producto que tenemos en el formulario, para que el componente padre lo reciba y lo agregue a la lista de productos
      this.newProductEvent.emit(this.product);
    }

    productForm.reset();
  }

  clean(): void {
    this.product = new Product();
  }

}
