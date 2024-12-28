import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], searchString: string): any[] {
    if (!values || !searchString) {
      return values; // Return the original array if no values or search string is provided
    }
    
    // Convert the search string to lowercase for case-insensitive comparison
    const lowerCaseSearchString = searchString.toLowerCase();

    // Filter the array based on the search string
    return values.filter(value => 
      value.toLowerCase().includes(lowerCaseSearchString)
    );
  }
}
