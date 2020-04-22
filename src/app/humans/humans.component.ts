import { Component, OnInit } from '@angular/core';
import { Human } from '../human';
import { HumanService} from "../human.service";



@Component({
  selector: 'app-humans',
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.css']
  /*Styles and stylesheets identified in @Component metadata are scoped to that specific component.*/
})
export class HumansComponent implements OnInit {
  humans: Human[];

  constructor(private humanService: HumanService){}

  ngOnInit(): void {
    this.getHumans();
  }

  getHumans(): void {
    this.humanService.getHumans().subscribe(humans => this.humans = humans);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.humanService.addHuman({ name } as Human)
      .subscribe(human => {
        this.humans.push(human);
      });
  }
  delete(human: Human): void {
    this.humans = this.humans.filter(h => h !== human);
    this.humanService.deleteHuman(human).subscribe();
  }
}
