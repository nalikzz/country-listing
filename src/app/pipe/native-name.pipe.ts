import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nativeName'
})
export class NativeNamePipe implements PipeTransform {

  transform(nativeNameObj: any, ...args: unknown[]): unknown {
    let lang: string[] = []
    Object.keys(nativeNameObj).forEach((key, index) => {
      console.log(nativeNameObj[key])
      const nativeName = { lan: key, name: nativeNameObj[key].official }
      lang.push(`${nativeName.lan} : ${nativeName.name}`)
    })

    // ellipsis
    let data = lang.toString().substring(0, 50);
    if (lang.toString().length > 50) {
      data = `${data} ...`
    }

    return data;
  }

}
