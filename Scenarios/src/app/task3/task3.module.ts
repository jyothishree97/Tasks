import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Compon1Component } from './compon1/compon1.component';
import { Compon2Component } from './compon2/compon2.component';

@NgModule({
  declarations: [Compon1Component, Compon2Component],
  imports: [
    CommonModule
  ],
  exports: [ Compon1Component, Compon2Component]
})
export class Task3Module { }
