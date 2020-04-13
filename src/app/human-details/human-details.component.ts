import { Component, OnInit, Input } from '@angular/core';
import { Human } from "../human";

@Component({
  selector: 'app-human-details',
  templateUrl: './human-details.component.html',
  styleUrls: ['./human-details.component.css']
})
export class HumanDetailsComponent implements OnInit {
@Input() human: Human; //@Input decorator used to make the human property available for binding by the external HumansComponent.
  constructor() { }

  ngOnInit(): void {
  }

}
