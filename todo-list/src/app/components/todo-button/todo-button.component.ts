// * Base
import { Component, EventEmitter, Input, Output } from '@angular/core'

// * Directive
import { NgClass } from '@angular/common'

@Component({
  selector: 'app-todo-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-button.component.html',
  styleUrl: './todo-button.component.scss',
})
export default class TodoButtonComponent {
  @Input() label: string = ''
  @Input() buttonClass: string | undefined
  @Output() action = new EventEmitter<void>()

  onClick() {
    this.action.emit()
  }
}
