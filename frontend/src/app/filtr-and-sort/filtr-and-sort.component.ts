import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filtr-and-sort',
  templateUrl: './filtr-and-sort.component.html',
  styleUrls: ['./filtr-and-sort.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FiltrAndSortComponent implements OnInit {
  selected: string = "od najnowszego";
  constructor() { }

  ngOnInit(): void {
  }

}
