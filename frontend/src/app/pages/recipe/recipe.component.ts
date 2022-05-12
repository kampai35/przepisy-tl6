import { Irecipe } from './../../interfaces/irecipe';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-main-recipe',
  template: `
     <input type="text" placeholder="{{recipe.description}}">
  `
})
export class RecipePageComponent {
  recipe: Irecipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}


  ngOnInit() {
    console.log("PARAM", this.route.snapshot.params.id);

    this.recipeService.getRecipe(this.route.snapshot.params.id).subscribe(recipe =>{
      this.recipe = recipe;
      console.log(recipe);
    });

  }

}
