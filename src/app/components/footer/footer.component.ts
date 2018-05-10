import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer has-background-black fix-footer">
    <div class="container">
    <div class="content has-text-centered">
      <p class="textColor">
        @MasterCoder2112
      </p>
      <p class="textColor">
        @Humco10
      </p>
      <p class="textColor">
        @mk2961
      </p>
    </div>
    </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
