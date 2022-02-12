import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular';
  curso: string = 'Curso Sprint 5 ';
  profesor: string = 'Andres Guzman';
}
