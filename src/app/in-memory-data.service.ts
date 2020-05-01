import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Human } from './human';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const humans = [
      { id: 1, age: 22, name: 'Helen' },
      { id: 2, age: 31, name: 'Lena' },
      { id: 3, age: 32, name: 'Dmytro' },
      { id: 4, age: 33, name: 'Celena' },
      { id: 5, age: 38, name: 'Mircha' },
      { id: 6, age: 24, name: 'Ricky' },
      { id: 7, age: 27, name: 'Dima' },
      { id: 8, age: 41, name: 'Mila' },
      { id: 9, age: 19, name: 'Sam' },
      { id: 10, age: 29, name: 'Tim' }
    ];
    return {humans};
  }

  // Overrides the genId method to ensure that a human always has an id.
  // If the humans array is empty,
  // the method below returns the initial number (11).
  // if the humans array is not empty, the method below returns the highest
  // human id + 1.
  // genId(humans: Human[]): number {
  //   return humans.length > 0 ? Math.max(...humans.map(human => human.id)) + 1 : 11;
  // }
}
