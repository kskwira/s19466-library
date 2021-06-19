import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "./book";

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(items: Book[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }
}
