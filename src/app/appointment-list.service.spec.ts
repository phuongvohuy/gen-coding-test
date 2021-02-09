import { TestBed } from '@angular/core/testing';

import { AppointmentListService } from './appointment-list.service';
import { HttpClient } from '@angular/common/http';
import { defer, of } from 'rxjs';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('AppointmentListService', () => {
	let service: AppointmentListService;
	let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
		httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
		TestBed.configureTestingModule({
			providers: [
				{ provide: HttpClient, useValue: httpClientSpy},
				AppointmentListService
			]
		})
		service = TestBed.inject(AppointmentListService);
  });

  it('should be created', () => {
		expect(service).toBeTruthy();
	});
	
	it('Test retrieving Appointment List', () => {
		const expectAppointmentList: Array<any> = [{
			"id": 5,
			"position": 5, 
			"appointmentDate": "2021-01-10T11:00:00",
			"site": "Putney",
			"with": "Roy Oven",
			"duration": 60,
			"status": false,
			"claimNo": "31231",
			"examination": false,
			"chargedFee": 1.114,
			"invoicedFee": 1.20,
			"paidWO": 3.5
		}]
		
		httpClientSpy.get.and.returnValue(of({
			data: expectAppointmentList
		}));

		service.retrieveAppointList().subscribe(
			(appointmentList: Array<any>) => {
				expect(appointmentList).toEqual(expectAppointmentList, 'Expect to match mock data list')
			}
		);

		expect(httpClientSpy.get.calls.count()).toBe(1, 'Spy is called one time only');
	});

	it('Test retrieving Appointment Detail Information Succesful Case', () => {
		const expectAppointmentDetailList: Array<any> = [{
			"id": 5,
			"position": 5, 
			"appointmentDate": "2021-01-10T11:00:00",
			"site": "Putney",
			"with": "Roy Oven",
			"duration": 60,
			"status": false,
			"claimNo": "31231",
			"examination": false,
			"chargedFee": 1.114,
			"invoicedFee": 1.20,
			"paidWO": 3.5
		}]

		httpClientSpy.get.and.returnValue(of({
			data: expectAppointmentDetailList
		}));
		const existId: number = 5;
		service.getAppointmentDetailById(existId).subscribe(
			(appointmentItem: any) => {
				expect(appointmentItem).toEqual(expectAppointmentDetailList[0], `Expect id = ${existId} to be existed`)
			}
		);

		expect(httpClientSpy.get.calls.count()).toBe(1, 'Spy is called one time only');
	})

	it('Test Retrieving Appointment Detail Information failed case', () => {
		const expectAppointmentDetailList: Array<any> = [{
			"id": 5,
			"position": 5, 
			"appointmentDate": "2021-01-10T11:00:00",
			"site": "Putney",
			"with": "Roy Oven",
			"duration": 60,
			"status": false,
			"claimNo": "31231",
			"examination": false,
			"chargedFee": 1.114,
			"invoicedFee": 1.20,
			"paidWO": 3.5
		}]
		httpClientSpy.get.and.returnValue(of({
			data: expectAppointmentDetailList
		}));
		const nonExistId: number = 1;
		const failSpy = jasmine.createSpy('failFun');
		service.getAppointmentDetailById(nonExistId).subscribe(
			() => 1,
			failSpy
		)

		expect(failSpy).toHaveBeenCalledTimes(1);
	})

	
});
