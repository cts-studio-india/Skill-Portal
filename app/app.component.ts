import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/search-list" routerLinkActive="active">Search</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['../../css/app.component.css'],
})
export class AppComponent {
  title = 'Employee Search based on Skills';
}
