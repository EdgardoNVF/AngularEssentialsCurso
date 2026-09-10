import { Component, output, signal, WritableSignal } from '@angular/core';
import { PetEntity, Specie } from '../../model/entities';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-petform',
  imports: [FormsModule],
  templateUrl: './petform.html',
  styleUrl: './petform.css',
})
export class Petform {
  //convierte en una lista el enum
  options=Object.values(Specie);

  //pet creado
  pet:WritableSignal<PetEntity> = signal({
    name:'',
    age:0,
    specie:Specie.OTHER
  });

  //emisor de eventos
  newPet=output<PetEntity>();

  //error booleano
  error:WritableSignal<boolean> = signal(false);

  //mensaje de error
  mensaje:WritableSignal<string> =signal("");

  emitPet(){
      if(this.pet().name.length>0 && this.pet().age>0){
           this.newPet.emit({
             name:this.pet().name,
             age:this.pet().age,
             specie:this.pet().specie
           });
           this.error.set(false);
           this.mensaje.set("");
      }else{
        this.error.set(true);
        this.mensaje.set("Nombre y edad incorrectos!!!");
      }
  }

}
