import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

import { FooterComponent } from './footer/footer.component';
import { RecipeCardTemplateComponent } from './recipe-card-template/recipe-card-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltrAndSortComponent } from './filtr-and-sort/filtr-and-sort.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { ServicesModule } from '../services/services.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    RecipeCardTemplateComponent,
    FiltrAndSortComponent,
    LoginComponent,
    RegisterComponent,
    EditRecipeComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    RecipeCardTemplateComponent,
    FiltrAndSortComponent,
    EditRecipeComponent
  ],
  imports: [
    ServicesModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSelectModule,
    MatMenuModule,
    RouterModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule
  ],
})
export class ComponentsModule { }
