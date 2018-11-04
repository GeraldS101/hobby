import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private hobbies = new BehaviorSubject<any>(['The first hobby', 'Another silly hobby']);
  hobby = this.hobbies.asObservable();

  constructor() { }

  changeHobby(newHobby) {
    this.hobbies.next(newHobby);
  }
}
