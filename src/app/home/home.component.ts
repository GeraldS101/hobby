import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { Globals } from '../ui/components/globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: Globals.animation 
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = 'Add an item';
  hobbyText: string = '';
  hobbies = [];

  constructor(private _data: DataService) { 
  }

  ngOnInit() {
    this._data.hobby.subscribe(res => this.hobbies = res);
    this._data.changeHobby(this.hobbies);
    this.itemCount = this.hobbies.length;
  }

  addItem() {
    this.hobbies.push(this.hobbyText);
    this.hobbyText = '';
    this._data.changeHobby(this.hobbies);
    this.itemCount = this.hobbies.length;
  }

  removeItem(i) {
    this.hobbies.splice(i, 1);
    this._data.changeHobby(this.hobbies);
    this.itemCount = this.hobbies.length;
  }

}
