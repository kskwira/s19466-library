import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "./book";

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(items: Book[], searchId: number): any[] {

    if (searchId != 0) {
      return items.filter(it => {
        return it.id == searchId;
      });
    }
    else
      return [];
  }

}
