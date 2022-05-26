import { EditRecipeComponent } from '../../components/edit-recipe/edit-recipe.component';
import { MatDialog } from '@angular/material/dialog';
import { Irecipe } from './../../interfaces/irecipe';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-main-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipePageComponent {
  recipe: Irecipe;
  inactive: number;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    public dialog: MatDialog
  ) {}


  ngOnInit() {
    console.log("PARAM", this.route.snapshot.params.id);

    this.recipeService.getRecipe(this.route.snapshot.params.id).subscribe(recipe =>{
      this.recipe = recipe;

      //check maxlvl - lvl for icons
      this.inactive = this.inactiveIcons(recipe.level);
      console.log(recipe.single_pot + '<- test');
    });

  }

  inactiveIcons(level: number){
    let inactive2 = level==3 ? 0 : (level==2 ? 1 : (level==1 ? 2 : null));
    return inactive2;
  }

  editRecipe(){
    this.dialog.open(EditRecipeComponent, {
      data: JSON.parse(JSON.stringify(this.recipe)) //to kopiuje obiekt
    });
  }

}
