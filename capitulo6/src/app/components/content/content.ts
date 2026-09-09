import { Component, signal, WritableSignal } from '@angular/core';
import { Productcard } from "../productcard/productcard";
import { Product } from '../../model/entities';

@Component({
  selector: 'app-content',
  imports: [Productcard],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  products:WritableSignal<Product[]> = signal([
    {name:"agua",brand:"zoe",price:3},
    {name:"leche", brand:"Nido",price: 5},
    {name:"jamón", brand:"Fud", price: 8}
  ]);

  deleteProductC(name:string){
     this.products.set(
      this.products().filter(t=>t.name != name)
     );
  }


}
