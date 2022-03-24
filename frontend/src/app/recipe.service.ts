import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Irecipes } from './irecipes';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RecipeService {

  baseURL = "http://localhost:3011";
  project: any;

  constructor(private http: HttpClient) { }

  public recipeList():Observable<Irecipes[]>{
    return this.http.get<{data: Irecipes[]}>(this.baseURL+'/recipes').pipe(
      map(this.project, (response: { [x: string]: any; }) => response['data'])
      );
  }

  // public recipeList(): Observable<Irecipes[]>{
  //   return this.http.get<Irecipes[]>(this.baseURL+"");
  // }
  // public addRecipe(recipe: Irecipes): Observable<Irecipes>{
  //   return this.http.post<Irecipes>(this.baseURL+"", recipe);
  // }
}
