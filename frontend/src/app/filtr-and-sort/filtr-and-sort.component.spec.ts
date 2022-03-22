import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrAndSortComponent } from './filtr-and-sort.component';

describe('FiltrAndSortComponent', () => {
  let component: FiltrAndSortComponent;
  let fixture: ComponentFixture<FiltrAndSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrAndSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrAndSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
