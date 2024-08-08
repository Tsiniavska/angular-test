// * Base
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// * Components
import TodoListComponent from './components/todo-list/todo-list.component';
import HeaderComponent from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export default class AppComponent {}
