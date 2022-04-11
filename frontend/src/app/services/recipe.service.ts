import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Irecipe } from '../interfaces/irecipe';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  baseURL = "http://024f-91-246-72-14.ngrok.io";

  constructor(private http: HttpClient) { }

  public recipeList():Observable<Irecipe[]>{
    return this.http.get<{data: Irecipe[]}>(this.baseURL+'/recipes', {headers: { Authorization: '2c6a87322f5f999c3c94b8ce97ae237d138943b027debea71ad9948de9ce612c05e9fb6364f0e9' }}).pipe(
      map(response => response['data'])
      );
  }
}
