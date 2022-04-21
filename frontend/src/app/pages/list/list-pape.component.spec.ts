import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPapeComponent } from './list-pape.component';

describe('MainPageComponent', () => {
  let component: ListPapeComponent;
  let fixture: ComponentFixture<ListPapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
