import { Component, OnInit} from '@angular/core';
import {DataService} from './app.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    providers: [DataService]
  })
  export class HomeComponent implements OnInit {
    variablaa: any;
    serviceData: any;
    status = true;
    constructor(public dataService: DataService) {}
    ngOnInit() {
       const a = 10;
       const b = 20;
       this.variablaa = a;
       this.servicemethod();
    }
    servicemethod() {
      this.dataService.getPosts().subscribe(
        data => {
          this.status = false;
           this.serviceData = data;
        }, error => {

        }
      );
    }
  }