import { EditFormComponent } from './edit-form/edit-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesModule } from '../services/services.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    NavbarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    FooterComponent,
    RecipeCardTemplateComponent,
    FiltrAndSortComponent,
    EditFormComponent
  ],
  exports: [
    NavbarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    FooterComponent,
    RecipeCardTemplateComponent,
    FiltrAndSortComponent,
    EditFormComponent
  ],
  imports: [
    ServicesModule,
    FormsModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSelectModule,
    MatMenuModule,
    RouterModule,
    MatCardModule,
    MatChipsModule
  ],
})
export class ComponentsModule { }
