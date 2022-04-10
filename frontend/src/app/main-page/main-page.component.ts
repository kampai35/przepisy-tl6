import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Irecipes } from '../irecipes';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  descriptionSpace: string = '';
  recipeDataObject: Irecipes[] = [];
  name: string = '';

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.recipeService.recipeList().subscribe(recipeList =>{
      const recipeDataObject: Irecipes[] = [...recipeList];
      this.recipeDataObject = recipeDataObject;

    });
  }

}
