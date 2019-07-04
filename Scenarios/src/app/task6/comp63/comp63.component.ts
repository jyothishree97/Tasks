import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp63',
  templateUrl: './comp63.component.html',
  styleUrls: ['./comp63.component.css']
})
export class Comp63Component implements OnInit {
  public name = '';
  constructor() { }

  ngOnInit() {
  }
  myMessage(value) {
    this.name = value;
  }

}
