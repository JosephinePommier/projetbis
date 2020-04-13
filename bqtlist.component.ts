import { Component, OnInit , OnDestroy , Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BqtService } from '../services/bqt.service';
import * as firebase from 'firebase';
import { Bqt } from '../models/bqt';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-bqtlist',
  templateUrl: './bqtlist.component.html',
  styleUrls: ['./bqtlist.component.scss']
})


export class BqtlistComponent implements OnInit, OnDestroy {
    isAuth: boolean;
    @Input() boquetteName: string;
    @Input() boquetteStatut: string;
    @Input() index: number;

    bqts: Bqt[];
    bqtSubscription: Subscription;

    constructor(private bqtService: BqtService,
                private router: Router){}

      ngOnInit() {
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
          } else {
            this.isAuth = false;
          }
        }
      );
      this.bqtSubscription = this.bqtService.bqtSubject.subscribe(
        (bqts: Bqt[]) => {
          this.bqts = bqts;
        }
      );
      this.bqtService.emitBqts();
    }

    onSwitch() {
      if (this.boquetteStatut === 'Ouverte') {
        this.bqtService.switchOffOne(this.index);
      } else if (this.boquetteStatut === 'Fermée') {
        this.bqtService.switchOnOne(this.index);
      }

  }

    getStatut(){
        return this.boquetteStatut;
    }
    getColor() {
        if (this.boquetteStatut === 'Ouverte') {
          return 'green';
        } else if (this.boquetteStatut === 'Fermée') {
          return 'red';
        }
    }
    ngOnDestroy() {
      this.bqtSubscription.unsubscribe();
    }
}
