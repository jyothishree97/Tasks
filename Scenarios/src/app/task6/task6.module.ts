import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp61Component } from './comp61/comp61.component';
import { Comp62Component } from './comp62/comp62.component';
import { Comp63Component } from './comp63/comp63.component';

@NgModule({
  declarations: [Comp61Component, Comp62Component, Comp63Component],
  imports: [
    CommonModule
  ],
  exports: [Comp61Component, Comp62Component, Comp63Component]
})
export class Task6Module { }
