import { Irecipes } from './../irecipes';
import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card-template',
  templateUrl: './recipe-card-template.component.html',
  styleUrls: ['./recipe-card-template.component.scss']
})
export class RecipeCardTemplateComponent implements OnInit {
  panelOpenState = false;

  Irecipes: Irecipes[] = [];
  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
  }

  // recipeList(){
  //   this.recipeService.recipeList().subscribe((result: Irecipes[])=>{
  //     this.Irecipes = result;
  //   })
  // }

}
