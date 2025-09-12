import { Component } from '@angular/core';
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

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };

}
