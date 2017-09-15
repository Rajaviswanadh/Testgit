import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  constructor() {}
  user = 'hai';
  user1 = 'hai';
  title = 'app';
  changeval = '';
  items: any;
  ngOnInit() {
  }
  onclick() {
    alert(this.user1 + '===' + this.user);
  }
  change() {
    this.changeval = this.user1;
  }
}
