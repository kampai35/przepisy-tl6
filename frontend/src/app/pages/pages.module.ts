import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsModule } from '../components/components.module';
import { ListPapeComponent } from './list/list-pape.component';
import { MatIconModule } from '@angular/material/icon';
import { HomepageComponent } from './homepage/homepage.component';
import { RecipePageComponent } from './recipe/recipe.component';
import { NotFoundPageComponent } from './not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListPapeComponent,
    HomepageComponent,
    RecipePageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class PagesModule { }
