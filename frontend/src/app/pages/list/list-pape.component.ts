import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditFormComponent } from '../../components/edit-form/edit-form.component';
import { RecipeService } from '../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Irecipe } from '../../interfaces/irecipe';

@Component({
  selector: 'app-main-list',
  templateUrl: './list-pape.component.html',
  styleUrls: ['./list-pape.component.scss']
})
export class ListPapeComponent implements OnInit {
  recipeDataObject: Irecipe[] = [];
  name: string = '';

  constructor(
    private recipeService: RecipeService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.recipeService.recipeList().subscribe(recipeList =>{
      const recipeDataObject: Irecipe[] = [...recipeList];
      this.recipeDataObject = recipeDataObject;
    });
  }

  openEditForm(recipeData: Irecipe){
    console.log(recipeData);
    const modalRef = this.modalService.open(EditFormComponent,
      {
        windowClass: 'edit',
        keyboard: false,
        backdrop: 'static',
      });
      let data = {
        object: recipeData,
      }
      modalRef.componentInstance.fromParent = data;
      modalRef.result.then((result) => {
        console.log(result + 'test');
      }, (reason) => {
      });
  }

}
