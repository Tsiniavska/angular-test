// * Base
import { Injectable } from '@angular/core'

@Injectable()
export default class NavigationService {
  protected readonly _list = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/about',
      title: 'About',
    },
  ] as const

  get list() {
    return this._list
  }
}
