import { Component, input, output } from '@angular/core';
import { PetEntity } from '../../model/entities';

@Component({
  selector: 'app-petcard',
  imports: [],
  templateUrl: './petcard.html',
  styleUrl: './petcard.css',
})
export class Petcard {
  //el objeto de entrada al componente
  pet=input.required<PetEntity>();

  //emisor de evento
  namePet=output<string>();

  //metodo emisor
  emitNamePet(){
     this.namePet.emit(this.pet().name);
  }

}
