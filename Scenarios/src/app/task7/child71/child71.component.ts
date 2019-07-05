import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-child71',
  templateUrl: './child71.component.html',
  styleUrls: ['./child71.component.css']
})
export class Child71Component implements OnInit {
  service: string;
  editUser: string;
  constructor( private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.cast.subscribe(service => this.service = service);
  }
 onClick() {
   this.serviceService.editUser(this.editUser);
 }
}
