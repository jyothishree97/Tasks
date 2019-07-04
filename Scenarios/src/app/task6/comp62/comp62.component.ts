import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-comp62',
  templateUrl: './comp62.component.html',
  styleUrls: ['./comp62.component.css']
})
export class Comp62Component implements OnInit {
  @Input() public parentdata;
  constructor() { }

  ngOnInit() {
  }

}
