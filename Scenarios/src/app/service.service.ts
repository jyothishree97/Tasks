import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 private  user = new BehaviorSubject<string>('raj');
 cast = this.user.asObservable();

  constructor() { }

  editUser(newuser) {
    this.user.next( newuser );
  }
}
