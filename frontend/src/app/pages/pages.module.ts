import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsModule } from '../components/components.module';
import { ListPapeComponent } from './list/list-pape.component';
import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './homepage/homepage.component';
import { RecipePageComponent } from './recipe/recipe.component';
import { NotFoundPageComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    ListPapeComponent,
    HomePageComponent,
    RecipePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    MatIconModule
  ]
})
export class PagesModule { }
