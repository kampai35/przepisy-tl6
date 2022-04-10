import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Irecipes } from './irecipes';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  baseURL = "http://024f-91-246-72-14.ngrok.io";

  constructor(private http: HttpClient) { }

  public recipeList():Observable<Irecipes[]>{
    return this.http.get<{data: Irecipes[]}>(this.baseURL+'/recipes', {headers: { Authorization: '608e70c77c73cb316571d7deaef1ba88739a4b5d60d4a480345a58ea84a25f0cfadd83053c1316' }}).pipe(
      map(response => response['data'])
      );
  }
}
