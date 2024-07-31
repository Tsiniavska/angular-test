// * Base
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

// * Components
import TodoButtonComponent from '../todo-button/todo-button.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [TodoButtonComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export default class TodoItemComponent implements OnChanges {
  @Input() todo: string | undefined;
  @Output() remove = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    // eslint-disable-next-line dot-notation
    if (changes['todo']) {
      // eslint-disable-next-line dot-notation, no-console
      console.log('Додано нове завдання:', changes['todo'].currentValue);
    }
  }

  onRemove() {
    this.remove.emit();
  }
}
