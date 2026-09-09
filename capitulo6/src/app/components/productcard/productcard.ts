import { Component, input, output } from '@angular/core';
import { Product } from '../../model/entities';

@Component({
  selector: 'app-productcard',
  imports: [],
  templateUrl: './productcard.html',
  styleUrl: './productcard.css',
})
export class Productcard {
  //el componente para usarlo debe de recibir
  //obligatoriamente un objeto Product
  product=input.required<Product>();

  //emite el nombre del producto que se va a eliminar
  deleteProduct=output<string>();

  delete(){
    this.deleteProduct.emit(this.product().name);
  }


}
