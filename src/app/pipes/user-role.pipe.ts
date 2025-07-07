import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userRole'
})
export class UserRolePipe implements PipeTransform {

  transform(value: number ): string {
    return value === 1 ? "admin" : "comum"
  }

}
