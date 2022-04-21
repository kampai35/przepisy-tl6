import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-recipe',
  template: `
    recipe page
    lista przeipiso!
    <h1>Przepisy</h1>
    <h2>PrzepisyPrzepisy</h2>
    <h3>PrzepisyPrzepisy</h3>
  `
})
export class RecipePageComponent {

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit() {
    console.log("PARAM", this.route.snapshot.params.id)
  }

}
