import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HumansComponent } from './humans/humans.component';
import { FormsModule } from '@angular/forms';
import { HumanDetailsComponent } from './human-details/human-details.component'; // NgModel lives here
/*import the FormsModule in the AppModule so that Angular would recognize and apply the ngModel directive.*/

@NgModule({  /*Every component must be declared in exactly one NgModule.*/
  declarations: [
    AppComponent,
    HumansComponent,
    HumanDetailsComponent
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
