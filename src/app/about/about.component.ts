import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Globals } from '../ui/components/globals';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: Globals.animation
})
export class AboutComponent implements OnInit {

  hobbies = [];

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.hobby.subscribe(res => this.hobbies = res);
  }

  sendMeHome() {
    this.router.navigate(['']); 
  }

}
