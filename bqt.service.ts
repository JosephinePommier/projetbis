import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Bqt } from '../models/bqt';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class BqtService {
  bqtSubject = new Subject<Bqt[]>();
    private bqts: Bqt[] = [
      new Bqt('Foyer', 'Fermée'), new Bqt('BR', 'Ouverte')
  ];

    boquettes = [
        {
          id : 1,
          name: 'Foyer',
          statut: 'Fermée'
        },
        {
          id : 2,
          name: 'BR',
          statut: 'Fermée'
        },
        {
          id : 3,
          name: 'BZ',
          statut: 'Fermée'
        },
        {
          id : 4,
          name : 'C-Vis',
          statut: 'Ouverte'
        },
        {
          id : 5,
          name : 'BBD',
          statut: 'Fermée'
        },
        {
          id : 6,
          name : 'Auberge',
          statut: 'Ouverte'
        },
        {
          id : 7,
          name : 'BB',
          statut : 'Fermée'
        },
        {
          id : 8,
          name : 'Gasole',
          statut : 'Ouverte'
        },
        {
          id : 9,
          name : 'Cibernetique',
          statut : 'Fermée'
        }
      ];

    constructor(private httpModule: HttpClientModule) {
      // this.getBqts();
    }
    emitBqts() {
      this.bqtSubject.next(this.bqts.slice());
    }

    addBqt(user: Bqt) {
      this.bqts.push(user);
      this.emitBqts();
    }
    getAppareilById(id: number) {
      const bqt = this.boquettes.find(
        (s) => {
          return s.id === id;
        }
      );
      return bqt;
  }
  switchOnOne(i: number) {
      this.boquettes[i].statut = 'Ouverte';
  }
  switchOffOne(i: number) {
      this.boquettes[i].statut = 'Fermée';
  }}

    /*

    emitBqts() {
      this.bqtsSubject.next(this.bqts);
    }
    saveBqts() {
      firebase.database().ref('/bqts').set(this.bqts);
    }

  getBqts() {
    firebase.database().ref('/bqts')
      .on('value', (data: DataSnapshot) => {
          this.bqts = data.val() ? data.val() : [];
          this.emitBqts();
        }
      );
  }
  getSingleBqt(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/bqts/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
  createNewBqt(newBqt: Bqt) {
    this.bqts.push(newBqt);
    this.saveBqts();
    this.emitBqts();
  }
  removeBqt(bqt: Bqt) {
    const bqtIndexToRemove = this.bqts.findIndex(
      (bqtEl) => {
        if (bqtEl === bqt) {
          return true;
        }
      }
    );
    this.bqts.splice(bqtIndexToRemove, 1);
    this.saveBqts();
    this.emitBqts();
  }
 */


