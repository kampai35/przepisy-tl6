import { Icommon } from './../../interfaces/icommon';
import { RecipeService } from './../../services/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  common: Icommon[] = [];

  constructor(
    private recipeService: RecipeService
  ){ }

  ngOnInit(): void {

  }

  rand(){
    this.recipeService.homepageItems().subscribe(data =>{
      console.log(data);
      const common: Icommon[] = [...data];
      console.log(common);
      this.common = common;
      console.log(common);
    });
  }
}
