import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-compon1',
  templateUrl: './compon1.component.html',
  styleUrls: ['./compon1.component.css']
})
export class Compon1Component implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }

}
