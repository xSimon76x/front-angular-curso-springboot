import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Input() product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  @Output() newProductEvent = new EventEmitter();

  onSubmit(): void {
    //? De esta manera this.product obtiene la data del formulario, 
    //? gracias a la asociacion del input con el [(ngModel)] que llama al atributo del objeto product
    console.log(this.product)

    //? Emitimos el producto que tenemos en el formulario, para que el componente padre lo reciba y lo agregue a la lista de productos
    this.newProductEvent.emit(this.product);
  }

  clean(): void {
    this.product = new Product();
  }

}
