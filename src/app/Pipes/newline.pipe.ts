import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newline'
})
export class NewlinePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.replace(/\./g, '. \n');
  }
}