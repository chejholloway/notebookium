import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'lodash';

@Pipe({
  name: 'decodeURIComponent'
})
export class DecodeURIPipe implements PipeTransform {
  transform(input: any) {
    if (!isString(input)) {
      return input;
    }

    return decodeURIComponent(input);
  }
}
