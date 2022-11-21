import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentPipe'
})
export class MomentPipePipe implements PipeTransform {

  transform(value: string, dateFormat: string): any {
    return moment(value).format(dateFormat);
}

}
