// * Base
import { Component, EventEmitter, Output } from '@angular/core';

// * Module
import { FormsModule } from '@angular/forms';

// * Components
import TodoButtonComponent from '../todo-button/todo-button.component';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule, TodoButtonComponent],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss',
})
export default class TodoInputComponent {
  newTodo: string = '';
  @Output() add = new EventEmitter<string>();

  addTodo() {
    if (this.newTodo.trim()) {
      this.add.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}
