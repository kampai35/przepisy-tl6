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
    return this.http.get<{data: Irecipes[]}>(this.baseURL+'/recipes', {headers: { Authorization: '2b722726c5964d8465e1153c9ea0e0189c9fd2c76734e839bbd8c767efa3a0f1d8ce082ef0ed56' }}).pipe(
      map(response => response['data'])
      );
  }
}
