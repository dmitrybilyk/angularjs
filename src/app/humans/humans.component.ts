import { Component, OnInit } from '@angular/core';
import { Human } from '../human';
import { HUMANS } from '../humans-mock';

@Component({
  selector: 'app-humans',
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.css']
  /*Styles and stylesheets identified in @Component metadata are scoped to that specific component.*/
})
export class HumansComponent implements OnInit {
  // human: Human = {
  //   id: 1,
  // age: 33,
  // name: 'Lena'
//}

  humans = HUMANS;
  selectedHuman: Human;
  onSelect( human: Human): void {
    this.selectedHuman = human;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
