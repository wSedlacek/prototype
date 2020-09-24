import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphs',
})
export class ParagraphsPipe implements PipeTransform {
  public transform<T extends unknown>(data: T): T[] {
    return typeof data === 'string' ? (data.split('\n') as T[]) : [data];
  }
}
