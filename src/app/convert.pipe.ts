import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): unknown {
	console.log(value)
	if (!value) {
		return ''
	}
    
	switch(targetUnits) {
		case 'km':
			return value * 1.60934;
		case 'm':
			return value * 1.60394 * 1000;
		case 'cm':
			return	value * 1.60394 * 1000 * 1000;
		default:
			throw new Error('Target unit not supported')
	} 
  }

}
