import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any[], searchtitle: string): any[] {
    if(!data||!searchtitle){
      return data;
    }
    else{
      return data.filter(obj=>obj.title.toLowerCase().indexOf(searchtitle.toLowerCase())!==-1)
    }

  }

}
