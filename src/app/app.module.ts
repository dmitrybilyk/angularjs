import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';// NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumansComponent } from './humans/humans.component';
import { FormsModule } from '@angular/forms';/*import the FormsModule in the AppModule so
 that Angular would recognize and apply the ngModel directive.*/
import { HumanDetailsComponent } from './human-details/human-details.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HumanService} from "./human.service";
import {MessageService} from "./message.service";
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HumanSearchComponent } from './human-search/human-search.component';



@NgModule({  /*Every component must be declared in exactly one NgModule.*/
  declarations: [
    AppComponent,
    HumansComponent,
    HumanDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    HumanSearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HumanService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
