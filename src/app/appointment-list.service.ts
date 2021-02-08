import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, filter, map } from "rxjs/operators";
import { Observable } from 'rxjs';

/**
 * This class taking care of where, how to load appointment list
 * and define Appointment data model
 */

export interface Appointment {
	id: number,
	position: number;
	appointmentDate: string,
  site: string;
	with: string;
	duration: number,
	status: string,
	claimNo: string,
	examination: boolean,
	chargedFee: number,
	invoicedFee: number,
	paidWO: number,
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentListService {
	
  constructor(private http: HttpClient) { 
		
	}

	public async retrieveAppointList(): Promise<Appointment[]> {
		return await this.http.get('./assets/appointment_list.json').pipe(
			map((result: any) => result.data as Array<Appointment>),
			delay(2000)
		).toPromise();
	}

	public getAppointmentDetailById(id: number): Observable<Appointment> {
		return this.http.get('./assets/appointment_detail_list.json').pipe(
			map((result: any) => {
				const appointmentList: Array<Appointment> = result.data as Array<Appointment>;
				const filterList: Array<Appointment> =  appointmentList.filter((appointmentItem: Appointment) => appointmentItem.id === id)
				if(filterList.length === 0)	{
					throw new Error('does not exist')
				}
				return filterList[0];
			})
		);
	}
}
