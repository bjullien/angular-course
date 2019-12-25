import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title : '<h1>Angular Core Deep Dive</h1><script>alert("Attack!")</script>'
  };
  /*
    SECURITY NOTE:
      - if we add html, such as <h1> ... </h1> it will be escaped
        automatically, and <h1> will be treated as text, not HTML
      - if a hacker inject some <script></script>, <script> is escaped too
  */

  onLogoClicked() {
    alert('Hello World');
  }

  onKeyUp(newTitle: string) {
    // angular will reflect data changes into the view, automatically
    // because of '<input> [value]="data.title"'
    this.data.title = newTitle;
  }
}
