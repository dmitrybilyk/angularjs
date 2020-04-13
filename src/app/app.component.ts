import { Component } from '@angular/core';

    /*You always import the Component symbol from the Angular core library and
      annotate the component class with @Component.
      @Component is a decorator function that specifies the Angular metadata for the component.*/

@Component({  /* The CLI generated three metadata properties: */
  selector: 'app-root', // the component's CSS element selector
  templateUrl: './app.component.html', // the location of the component's template file.
  styleUrls: ['./app.component.css'] // the location of the component's private CSS styles.
})
export class AppComponent {
  title = 'First-angular-app from Lena and Dima';
}
/* The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component.
 It's a good place to put initialization logic.
 Always export the component class so you can import it elsewhere ... like in the AppModule */
