import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Irecipes } from './irecipes';

@Injectable({ providedIn: 'root' })
export class RecipeService {

  // baseURL: string = "";
  // constructor(private http: HttpClient) { }

  // public recipeList(): Observable<Irecipes[]>{
  //   return this.http.get<Irecipes[]>(this.baseURL+"");
  // }
  // public addRecipe(recipe: Irecipes): Observable<Irecipes>{
  //   return this.http.post<Irecipes>(this.baseURL+"", recipe);
  // }
}
