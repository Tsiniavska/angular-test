// * Base
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// * Components
import TodoItemComponent from '../todo-item/todo-item.component';
import TodoInputComponent from '../todo-input/todo-input.component';

// * Rxjs
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, TodoInputComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export default class TodoListComponent implements OnInit, OnDestroy {
  todos: string[] = [];
  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.resetTodos();
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  private resetTodos() {
    this.todos = [];
  }
}
