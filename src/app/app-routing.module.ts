import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HumansComponent } from "./humans/humans.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HumanDetailsComponent } from "./human-details/human-details.component";


const routes: Routes = [
  { path: 'humans', component: HumansComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },/*To make the app navigate to
the dashboard automatically. When the app starts, the browser's address bar points to the
web site's root. That doesn't match any existing route so the router doesn't navigate
anywhere. The space below the <router-outlet> is blank.*/
  { path: 'detail/:id', component: HumanDetailsComponent } /*The colon (:) in the path
  indicates that :id is a placeholder for a specific hero id.*/
];

@NgModule({     /*The @NgModule metadata initializes the router and starts
                it listening for browser location changes.*/
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
