import { Irecipe, Iingredient } from './../../interfaces/irecipe';
import { RecipeService } from './../../services/recipe.service';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(
    public activeModal: NgbActiveModal,
    private recipe: RecipeService
  ) { }

  editForm = new FormGroup({
    'name': new FormControl('',[
      Validators.minLength(3)
    ]),
    'description': new FormControl('',[
      Validators.minLength(3)
    ]),
    'short_description': new FormControl('',[
      Validators.minLength(3)
    ]),
    'ingredients': new FormControl,
    'level': new FormControl,
    'single_pot': new FormControl,
    'size': new FormControl,
    'time': new FormControl
  });

  get name(){return this.editForm.get('name')}
  get description(){return this.editForm.get('description')}
  get short_description(){return this.editForm.get('short_description')}
  get ingredients(){return this.editForm.get('ingredients')}
  get level(){return this.editForm.get('level')}
  get single_pot(){return this.editForm.get('single_pot')}
  get size(){return this.editForm.get('size')}
  get time(){return this.editForm.get('time')}


  closeModal(sendData?: any) {
    if(sendData === null || sendData === undefined){
      this.activeModal.dismiss();
    }
    else{
      this.activeModal.close(sendData);
    }
  }

  // submit(data?: any){
  //   console.log(data);
  //   this.recipe.editRecipe(data).subscribe(() =>{
  //     console.log('edytowano');
  //     this.closeModal();
  //   });
  // }


  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     const ingredients = this.editForm.value.ingriedients.push({name: value});
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }
  // remove(x: Iingredient): void {
  //   const ingredients = this.editForm.value.ingriedients.filter((item: Iingredient)=>item.name!==x.name);
  //   this.editForm.patchValue({ingredients});
  // }
}
