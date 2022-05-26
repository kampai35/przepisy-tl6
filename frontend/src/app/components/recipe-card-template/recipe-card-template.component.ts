import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-card-template',
  templateUrl: './recipe-card-template.component.html',
  styleUrls: ['./recipe-card-template.component.scss'],
})
export class RecipeCardTemplateComponent {
  panelOpenState = false;

  constructor() { }
}
