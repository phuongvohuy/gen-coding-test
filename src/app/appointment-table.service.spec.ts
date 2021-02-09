import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppointmentListService } from './appointment-list.service';

import { AppointmentTableService } from './appointment-table.service';

describe('AppointmentTableService', () => {
	let httpClientSpy: { get: jasmine.Spy };
  let service: AppointmentTableService;

  beforeEach(() => {
		httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
		TestBed.configureTestingModule({
			providers: [
				{ provide: HttpClient, useValue: httpClientSpy},
				AppointmentListService,
				AppointmentTableService
			]
		})
    service = TestBed.inject(AppointmentTableService);
  });

  it('should be created by inject correctly dependency', () => {
    expect(service).toBeTruthy();
	});
	
	it('Display Columns Name should be correct format', () => {
		expect(service.getDisplayColumns()).toEqual(jasmine.any(Array));
	})

	it('Column Definition should be correct format', () => {
		const columnDefinitions: Array<any> = service.retrieveAppointmentColumnDefinition();
		columnDefinitions.forEach(item => {
			expect(item['name']).toBeDefined();
			expect(item['header']).toBeDefined();
			expect(item['reference']).toBeDefined();
		})
	})

	it('Check retrieving datasource', () => {
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

		service.retrieveDataSource().then((item: any) => {
			expect(item).toEqual(expectAppointmentList, 'Expect to match mock data list for appointment list');
		})
	})
});
