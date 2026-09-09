import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
   //signal mutable (cambiará su valor varias veces)
   number:WritableSignal<number> = signal(0);
   dataInput:WritableSignal<string> = signal('');

   incremento(){
     this.number.update(valorActual=>{
      console.log("actualizando estado!!!");
      return valorActual+1;
     });
   }

   decremento(){
    this.number.update(valorActual=>valorActual-1);
   }

   reiniciar(){
     this.number.set(parseInt(this.dataInput()));
   }

}
