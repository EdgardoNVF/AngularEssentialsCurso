import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { Itemcard } from '../itemcard/itemcard';
import { ItemEntity } from '../../model/entitites';
import { ItemService } from '../../services/item-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  imports: [Itemcard],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content implements OnInit, OnDestroy {

  items:WritableSignal<ItemEntity[]> = signal([]);

  //obtener la instancia del Servicio en el componente
  private _service=inject(ItemService);

  //es importante eliminar la suscription
  //  cuando se elimine el componente
  private _subscription!: Subscription;

  ngOnInit(): void {
    this._subscription=this._service
                          .getItemsFromAPI()
                          .subscribe({
                            next: values=>this.items.set(values),
                            error: e=>console.log(e)
                          });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }


}
