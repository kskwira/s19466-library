import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "./book";

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(items: Book[], searchId: number[]): any[] {

    if (searchId.length > 0) {
      return items.filter(it => {
        return searchId.includes(it.id);
      });
    }
    else
      return [];
  }

}
