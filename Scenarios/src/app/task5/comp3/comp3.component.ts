import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-compn3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  @Output() public componentEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  showMe(value) {
    this.componentEvent.emit(value);
  }

}
