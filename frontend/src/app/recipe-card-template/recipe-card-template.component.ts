import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card-template',
  templateUrl: './recipe-card-template.component.html',
  styleUrls: ['./recipe-card-template.component.scss']
})
export class RecipeCardTemplateComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
