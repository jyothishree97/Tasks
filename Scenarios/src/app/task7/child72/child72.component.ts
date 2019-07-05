import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';


@Component({
  selector: 'app-child72',
  templateUrl: './child72.component.html',
  styleUrls: ['./child72.component.css']
})
export class Child72Component implements OnInit {
   service: string;
  constructor( private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.cast.subscribe(service => this.service = service);
  }

}
