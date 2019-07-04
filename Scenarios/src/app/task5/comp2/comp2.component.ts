import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  @Output() public component2Event = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  getMessage(value) {
    this.component2Event.emit(value);
  }

}
