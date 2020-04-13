import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';
import { BqtService } from '../app/services/bqt.service';
import { BqtlistComponent } from './bqtlist/bqtlist.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  boquettes: any[];
  isAuth = false;
  ngOnInit() {
    this.boquettes = this.bqtService.boquettes;
}

  constructor(private bqtService: BqtService) {
    const config = {
      apiKey: 'AIzaSyAYvT3JzaqZISZUn_VyhRyCmvXCQzpsZGY',
      authDomain: 'bqts-5550d.firebaseapp.com',
      databaseURL: 'https://bqts-5550d.firebaseio.com',
      projectId: 'bqts-5550d',
      storageBucket: 'bqts-5550d.appspot.com',
      messagingSenderId: '709023680275',
      appId: '1:709023680275:web:834d6f5ec07c574d27bce6',
      measurementId: 'G-JM7N6FPHD8'
    };
    firebase.initializeApp(config);
    let database = firebase.database();
  }
}


