import { RecipeService } from '../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Irecipe } from '../../interfaces/irecipe';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  recipeDataObject: Irecipe[] = [];
  name: string = '';

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.recipeService.recipeList().subscribe(recipeList =>{
      const recipeDataObject: Irecipe[] = [...recipeList];
      this.recipeDataObject = recipeDataObject;
    });
  }

}
