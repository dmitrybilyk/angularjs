import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';// NgModel lives here


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumansComponent } from './humans/humans.component';
import { FormsModule } from '@angular/forms';/*import the FormsModule in the AppModule so
 that Angular would recognize and apply the ngModel directive.*/
import { HumanDetailsComponent } from './human-details/human-details.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule({  /*Every component must be declared in exactly one NgModule.*/
  declarations: [
    AppComponent,
    HumansComponent,
    HumanDetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
