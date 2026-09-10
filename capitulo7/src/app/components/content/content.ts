import { Component, signal, WritableSignal } from '@angular/core';
import { Petform } from '../petform/petform';
import { Petcard } from '../petcard/petcard';
import { PetEntity } from '../../model/entities';

@Component({
  selector: 'app-content',
  imports: [Petform, Petcard],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  pets:WritableSignal<PetEntity[]> = signal([]);

  insert(pet:PetEntity){
    this.pets.update(actual=>[...actual, pet]);
    console.log(this.pets());
  }

  delete(petName:string){
     this.pets.set(
      this.pets().filter(t=>t.name != petName)
     );
  }
}
