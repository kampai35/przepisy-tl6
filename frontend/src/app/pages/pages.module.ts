import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsModule } from '../components/components.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MainPageComponent,
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    MatIconModule
  ]
})
export class PagesModule { }
