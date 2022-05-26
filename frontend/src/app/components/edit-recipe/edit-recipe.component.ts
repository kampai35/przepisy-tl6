import { RecipeService } from 'src/app/services/recipe.service';
import { Irecipe, Itags } from './../../interfaces/irecipe';
import { Component } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent {

  //tags prop
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Itags[] = this.recipe?.tags;

  editRecipe = new FormGroup({
    'name': new FormControl(this.recipe?.name),
    'image': new FormControl(this.recipe?.image),
    'level': new FormControl(this.recipe?.level),
    'time': new FormControl(this.recipe?.time),
    'single_pot': new FormControl(this.recipe?.single_pot),
    'tags': new FormControl(this.recipe?.tags),
    'size': new FormControl(this.recipe?.size),
    'short_description': new FormControl(this.recipe?.short_description),
    'description': new FormControl(this.recipe?.description),
    'ingredients': new FormArray(
      this.recipe?.ingredients.map(ingredient => {
        return new FormGroup({
          'name': new FormControl(ingredient.name),
          'amount': new FormControl(ingredient.amount)
        })
      })
    ),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public recipe: Irecipe,
    private recipeService: RecipeService
  ) {  }


  //tags functions
  addTag(event: MatChipInputEvent):void{
    const value = (event.value || '').trim();

    if(value) this.tags.push(value);

    event.chipInput!.clear();
  }
  removeTag(tag): void{
    const index = this.tags.indexOf(tag);

    if(index >= 0) this.tags.splice(index, 1);
  }

  //ingredients functions
  get ingredients(): FormArray{
    return this.editRecipe.get('ingredients') as FormArray;
  }
  addIngredient(){
    const ingredientForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'amount': new FormControl('', Validators.required)
    })
    this.ingredients.push(ingredientForm);
  }
  removeIngredient(ingredientIndex: number){ this.ingredients.removeAt(ingredientIndex) }


  submit(data){
    console.log(data.value);
    this.recipeService.editRecipe({...data.value, _id: this.recipe._id}).subscribe(
      //zamknąć modal
    );
  }
}
