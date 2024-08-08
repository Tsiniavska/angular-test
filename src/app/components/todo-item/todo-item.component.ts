// * Base
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

// * Components
import TodoButtonComponent from '../todo-button/todo-button.component';

// * Pipes
import { DatePipe } from '@angular/common';

// * Custom Pipe
import StarInsteadSpacePipe from '../../pipes/star.pipe';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [TodoButtonComponent, DatePipe, StarInsteadSpacePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export default class TodoItemComponent implements OnChanges {
  private _todo: string | null = null;

  @Input()
  set todo(value: string | null) {
    this._todo = value;
  }

  get todo(): string | null {
    return this._todo;
  }
  @Output() remove = new EventEmitter<void>();

  dateCreating = new Date();

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
