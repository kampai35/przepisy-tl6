import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardTemplateComponent } from './recipe-card-template.component';

describe('RecipeCardTemplateComponent', () => {
  let component: RecipeCardTemplateComponent;
  let fixture: ComponentFixture<RecipeCardTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCardTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
