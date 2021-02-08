import {
	Pipe,
	PipeTransform
} from '@angular/core';

import * as moment from 'moment';

@Pipe({
	name: 'appointment'
})
export class AppointmentPipe implements PipeTransform {

	transform(value:string, modifier:string) {
		if (!modifier) return value;
		return eval('this.' + modifier + '(\'' + value + '\')')
	}

	date(value: string): string {
		return moment(value).format('ddd DD/MM/YY hh:mm A');
	}

	status(value: string): string {
		return value === 'true' ? 'Confirmed' : 'Not Confirmed';
	}

	examination(value: string): string {
		return value === 'true' ? 'Yes' : 'No';
	}

	money(value: string): string {
		const moneyNo: number = parseFloat(value);
		const noDecimal: number = 2;
		const currency: string = '$'
		return `${currency}${moneyNo.toFixed(noDecimal).toString()}`;
	}
}