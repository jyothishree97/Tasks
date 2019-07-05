import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent7Component } from './parent7/parent7.component';
import { Child71Component } from './child71/child71.component';
import { Child72Component } from './child72/child72.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [Parent7Component, Child71Component, Child72Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [Parent7Component, Child71Component, Child72Component],
})
export class Task7Module { }
