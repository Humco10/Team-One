import { Component } from '@angular/core';

/**
 * Has a template html and css file it uses. To load in these files, you must
 * include the selector <app-root> in the html to basically just put all of 
 * this data into the base (index.html) html file.
 */
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <!-- header -->
  <app-header></app-header>

  <!-- routes will be rendered here -->
  <router-outlet></router-outlet>

  <!-- footer -->
  <app-footer></app-footer>
`,
  styleUrls: ['./app.component.css']
})

//Title of the entire app exported with this component object
export class AppComponent {
  title = 'HumByrd and Knapp Games';
}
