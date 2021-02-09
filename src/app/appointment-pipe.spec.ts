import { AppointmentPipe } from "./appointment-pipe"
import * as moment from 'moment';

describe('AppointmentPipeTest', () => {
	const appointmentPipe: AppointmentPipe = new AppointmentPipe();

	it('transform date test', () => {
		const date = new Date();
		const expectedValue = moment(date).format('ddd DD/MM/YY hh:mm A');
		expect(appointmentPipe.transform(date.toUTCString(), 'date')).toEqual(expectedValue);
	})

	it('transform status test', () => {
		expect(appointmentPipe.transform(true, 'status')).toEqual('Confirmed');
		expect(appointmentPipe.transform(false, 'status')).toEqual('Not Confirmed');
	})

	it('transform examination test', () => {
		expect(appointmentPipe.transform(true, 'examination')).toEqual('Yes');
		expect(appointmentPipe.transform(false, 'examination')).toEqual('No');
	})

	it('transform money test', () => {
		expect(appointmentPipe.transform(1.10, 'money')).toEqual('$1.10');
		expect(appointmentPipe.transform(1, 'money')).toEqual('$1.00');
	})
})