// * Base
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

// * Components
import NavigationComponent from '../navigation/navigation.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export default class HeaderComponent {}
