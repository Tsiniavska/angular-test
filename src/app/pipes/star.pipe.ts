// * Base
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starInsteadSpace',
  standalone: true,
})
export default class StarInsteadSpacePipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value) return '';
    return value.replace(/ /g, '*');
  }
}
