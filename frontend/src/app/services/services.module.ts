import { NgModule } from '@angular/core';

//material
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { RecipeService } from './recipe.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    UserService,
    RecipeService
  ]
})
export class ServicesModule { }
