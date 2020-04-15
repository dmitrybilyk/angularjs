import { Injectable } from '@angular/core';
import { HUMANS } from "./humans-mock";
import { Human } from "./human";
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";

/* The @Injectable() decorator accepts a metadata object for the service,
 the same way the @Component() decorator did for your component classes*/
@Injectable({
  providedIn: 'root'
})
export class HumanService {

/*This is a typical "service-in-service" scenario: you inject the MessageService
 into the HumanService which is injected into the HumansComponent.*/
  constructor(private messageService: MessageService) { }

/*  getHumans(): Human[]{
    return HUMANS;
  }
*/
  getHumans(): Observable<Human[]>{
    this.messageService.add('HumanService fetched humans');
  return of(HUMANS);
  }
}
