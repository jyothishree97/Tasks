import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compon2',
  templateUrl: './compon2.component.html',
  styleUrls: ['./compon2.component.css']
})
export class Compon2Component implements OnInit {

  constructor() { }
  message = 'Parent to Child';
  ngOnInit() {
  }

}
