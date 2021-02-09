import { Injectable } from '@angular/core';
import { AppointmentListService, Appointment } from './appointment-list.service';

/**
 * This class define of data table for Appointment, define columns to display in view, and how
 * to retrieve data for datasource of table
 */

export const AppointmentColumnName = {
	POSITION_COLUMN: 'position',
	APPOINTMENT_DATE_COLUMN: 'appointmentDate',
	SITE_COLUMN: 'site',
	WITH_COLUMN: 'with',
	DURATION_COLUMN: 'duration',
	STATUS_COLUMN: 'status',
	CLAIM_NO_COLUMN: 'claimNo',
	EXAMINATION_COLUMN: 'examination',
	CHARGE_FEE_COLUMN: 'chargedFee',
	INVOICED_FEE_COLUMN: 'invoicedFee',
	PAID_WO_COLUMN: 'paidWO',
	SETTING_COLUMN: 'setting',
}

export interface AppointmentColumn {
	name: string,
	header: string,
	reference: string,
	pipe: string,
}

const appointmentColumnData: Array<AppointmentColumn> = [{
	name: AppointmentColumnName.POSITION_COLUMN,
	header: '#',
	reference: 'position',
	pipe: '',
}, {
	name: AppointmentColumnName.APPOINTMENT_DATE_COLUMN,
	header: 'Appointment date',
	reference: 'appointmentDate',
	pipe: 'date',
}, {
	name: AppointmentColumnName.SITE_COLUMN,
	header: 'Site',
	reference: 'site',
	pipe: '',
}, {
	name: AppointmentColumnName.WITH_COLUMN,
	header: 'With',
	reference: 'with',
	pipe: '',
}, {
	name: AppointmentColumnName.DURATION_COLUMN,
	header: 'Dur',
	reference: 'duration',
	pipe: '',
}, {
	name: AppointmentColumnName.STATUS_COLUMN,
	header: 'Status',
	reference: 'status',
	pipe: 'status'
}, {
	name: AppointmentColumnName.CLAIM_NO_COLUMN,
	header: 'Claim no',
	reference: 'claimNo',
	pipe: ''
}, {
	name: AppointmentColumnName.EXAMINATION_COLUMN,
	header: 'Exam',
	reference: 'examination',
	pipe: 'examination',
}, {
	name: AppointmentColumnName.CHARGE_FEE_COLUMN,
	header: 'Charge',
	reference: 'chargedFee',
	pipe: 'money'
}, {
	name: AppointmentColumnName.INVOICED_FEE_COLUMN,
	header: 'Invoiced',
	reference: 'invoicedFee',
	pipe: 'money'
}, {
	name: AppointmentColumnName.PAID_WO_COLUMN,
	header: 'Paid/WO',
	reference: 'paidWO',
	pipe: 'money'
}]

@Injectable({
  providedIn: 'root'
})
export class AppointmentTableService {

  constructor(private appointmentService: AppointmentListService) { 

	}

	public retrieveAppointmentColumnDefinition(): Array<AppointmentColumn> {
		return appointmentColumnData;
	}

	public async retrieveDataSource(): Promise<Appointment[]> {
		return await this.appointmentService.retrieveAppointList().toPromise();
	}

	public getDisplayColumns(): Array<string> {
		const { 
			POSITION_COLUMN, APPOINTMENT_DATE_COLUMN, SITE_COLUMN, 
			WITH_COLUMN, DURATION_COLUMN, STATUS_COLUMN, 
			CLAIM_NO_COLUMN, EXAMINATION_COLUMN, CHARGE_FEE_COLUMN, 
			INVOICED_FEE_COLUMN, PAID_WO_COLUMN, SETTING_COLUMN
		} = AppointmentColumnName;

		return [
			POSITION_COLUMN, APPOINTMENT_DATE_COLUMN, SITE_COLUMN, 
			WITH_COLUMN, DURATION_COLUMN, STATUS_COLUMN, 
			CLAIM_NO_COLUMN, EXAMINATION_COLUMN, CHARGE_FEE_COLUMN, 
			INVOICED_FEE_COLUMN, PAID_WO_COLUMN, SETTING_COLUMN
		]
	}
}
