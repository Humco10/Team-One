import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar is-black" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      Navigate our website:
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
      <a id="page4" href="" routerLink="/" routerLinkActive="active">Home page</a>
      </a>
      <a class="navbar-item">
      <a id="page1" href="" routerLink="/applet" routerLinkActive="active">Applet</a>
      </a>
      <a class="navbar-item">
      <a id="page2" href="" routerLink="/history" routerLinkActive="active">Version History</a>
      </a>
      <a class = "navbar-item">
      <a id="page3" href="" routerLink="/random" routerLinkActive="active">Random API</a>
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version 0.7.1
      </div>
    </div>
  </div>
</nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
//        <a class="navbar-item">
//<img src="https://bulma.io/images/bulma-logo.png">