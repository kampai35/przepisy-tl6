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
    return this.http.get<{data: Irecipe[]}>(this.baseURL+'/recipes',
        {headers: { Authorization: JSON.parse(localStorage.getItem('user') || "")?.access_token}})
      .pipe(
        map(response => response['data'])
      );
  }

  public editRecipe(recipe: Irecipe):Observable<Irecipe>{
    return this.http.patch<{data: Irecipe}>(this.baseURL+'/recipes/'+recipe._id,
      {data: recipe}, {headers: { Authorization: JSON.parse(localStorage.getItem('user') || "")?.access_token}})
      .pipe(
        map(response => response['data'])
      );
  }

  public getRecipe(id: string):Observable<Irecipe>{
    return this.http.get<{data: Irecipe}>(this.baseURL+'/recipes/'+id,
      {headers: { Authorization: JSON.parse(localStorage.getItem('user') || "")?.access_token}})
      .pipe(
        map(response => response['data'])
      );
  }
}
