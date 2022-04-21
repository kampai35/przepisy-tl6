import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPapeComponent } from './pages/list/list-pape.component';
import { HomePageComponent } from './pages/homepage/homepage.component';
import { RecipePageComponent } from './pages/recipe/recipe.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'lista-przepisow', component: ListPapeComponent },
  { path: 'przepis/:id', component: RecipePageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
