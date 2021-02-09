import { ActivatedRoute, ActivatedRouteStub } from '../../testing/activated-route-stub';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDetailScreenComponent } from './appointment-detail-screen.component';
import { Observable, of } from 'rxjs';
import { Appointment, AppointmentListService } from '../appointment-list.service';
import {AppointmentPipe} from '../appointment-pipe';
import * as moment from 'moment';

describe('AppointmentDetailScreenComponent', () => {
  let component: AppointmentDetailScreenComponent;
	let fixture: ComponentFixture<AppointmentDetailScreenComponent>;
	let appointListServiceMock: { getAppointmentDetailById: jasmine.Spy };
	let activeRoute: ActivatedRouteStub;
	
	beforeEach(() => {
		// mock service
		appointListServiceMock = jasmine.createSpyObj('AppointmentListService', ['getAppointmentDetailById']);
		// mock activedRoute
		activeRoute = new ActivatedRouteStub();
		TestBed.configureTestingModule({
			declarations: [ AppointmentDetailScreenComponent, AppointmentPipe ],
			providers: [
				{ provide: AppointmentListService, useValue: appointListServiceMock},
				{ provide: ActivatedRoute, useValue: activeRoute }
			]
		})
	})

  it('should create component', () => {
		const fixture = TestBed.createComponent(AppointmentDetailScreenComponent)
		component = fixture.componentInstance;
		
    expect(component).toBeDefined();
	});
	
	it('Test Render AppointmentDetail info', () => {
		const expectAppointment: Appointment = {
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
		}
		appointListServiceMock.getAppointmentDetailById.and.returnValue(of(expectAppointment));

		activeRoute.setParamMap({
			id: 5
		})

		const fixture = TestBed.createComponent(AppointmentDetailScreenComponent)
		component = fixture.componentInstance;
		fixture.detectChanges();

		const rootElement: HTMLElement = fixture.nativeElement;
		
		// check rendering title of page
		const h1 = rootElement.querySelector('h1') as any;
		expect(h1.textContent).toEqual('Appointment Detail Page');
		
		// check rendering correct data for date
		const dateElement = rootElement.querySelector('.appointment_date_test')
		const expectedValue = moment(expectAppointment.appointmentDate).format('ddd DD/MM/YY hh:mm A');
		expect(dateElement?.textContent).toEqual(expectedValue);

		// check rendering correct data for status test
		const statusElement = rootElement.querySelector('.status_test');
		const expectStatus: string = expectAppointment.status ? 'Confirmed' : 'Not Confirmed';
		expect(statusElement?.textContent).toEqual(expectStatus);
	})

	it('Test Render Invalid appointment Id', () => {
		appointListServiceMock.getAppointmentDetailById.and.callFake(() => {
			return new Observable(subscriber => {
				throw new Error('does not exist');
			})
		});

		activeRoute.setParamMap({
			id: 5
		})

		const fixture = TestBed.createComponent(AppointmentDetailScreenComponent)
		component = fixture.componentInstance;
		fixture.detectChanges();

		const rootElement: HTMLElement = fixture.nativeElement;
		const errorSection = rootElement.querySelector('.no_appoint_info') as any;
		expect(errorSection).toBeTruthy();
	})
});
