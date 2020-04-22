import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { HumanService } from "../human.service";
import { Human } from "../human";

@Component({
  selector: 'app-human-details',
  templateUrl: './human-details.component.html',
  styleUrls: ['./human-details.component.css']
})
export class HumanDetailsComponent implements OnInit {
@Input() human: Human; //@Input decorator used to make the human property
// available for binding by the external HumansComponent.

  constructor(
    private route: ActivatedRoute,
    private humanService: HumanService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHuman();
  }
  getHuman(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.humanService.getHuman(id)
      .subscribe(human => this.human = human);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.humanService.updateHuman(this.human)
      .subscribe(() => this.goBack());
  }

}
