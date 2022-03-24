import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.recipeService.recipeList().subscribe(recipeList =>{
      console.log('response z api', recipeList);
    });
  }

}
