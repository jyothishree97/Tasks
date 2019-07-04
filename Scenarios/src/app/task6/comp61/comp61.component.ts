import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comp61',
  templateUrl: './comp61.component.html',
  styleUrls: ['./comp61.component.css']
})
export class Comp61Component implements OnInit {
  @Output() public taskEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  myMessage(value) {
    this.taskEvent.emit(value);
 }

}
