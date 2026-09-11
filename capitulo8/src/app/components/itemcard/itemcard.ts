import { Component, input } from '@angular/core';
import { ItemEntity } from '../../model/entitites';

@Component({
  selector: 'app-itemcard',
  imports: [],
  templateUrl: './itemcard.html',
  styleUrl: './itemcard.css',
})
export class Itemcard {
  //recibimos un item
  item=input.required<ItemEntity>();
}
