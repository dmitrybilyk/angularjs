import { Component, OnInit } from '@angular/core';
import { Human } from '../human';
import { HumanService} from "../human.service";
import { MessageService} from "../message.service";


@Component({
  selector: 'app-humans',
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.css']
  /*Styles and stylesheets identified in @Component metadata are scoped to that specific component.*/
})
export class HumansComponent implements OnInit {
  /*human: Human = {
    id: 1,
    age: 33,
    name: 'Lena'
  }*/

  humans: Human[];
  selectedHuman: Human;


  constructor(private humanService: HumanService, private messageService: MessageService){}


  ngOnInit(): void {
    this.getHumans();
  }
  onSelect( human: Human): void {
    this.selectedHuman = human;
    this.messageService.add(`Selected human has name=${human.name}`);
  }
 /* getHumans(): void {
    this.humans = this.humanService.getHumans();
  }*/
  getHumans(): void {
    this.humanService.getHumans().subscribe(humans => this.humans = humans);
  }
}
