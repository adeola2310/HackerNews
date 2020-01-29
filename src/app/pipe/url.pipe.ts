import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  transform(url: string, args?: any): any {
    if (url) {
      const len = /\w+:\/\/([\w|\.]+)/;
      if (len) {
        return url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)[2];
        return url;
      }
      return url;
    }
  }

}
