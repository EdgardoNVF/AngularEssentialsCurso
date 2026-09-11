import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, timeout } from 'rxjs';
import { ItemEntity } from '../model/entitites';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  //inyectar httpclient
  private _http=inject(HttpClient);
  private _apiURL:string="http://40.74.249.41/item";

  getItemsFromAPI():Observable<ItemEntity[]>{
     return this._http
                .get<ItemEntity[]>(this._apiURL)
                .pipe(
                  timeout(2000)
                );
  }


}
