import { BreakpointObserver } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppointmentTableService } from '../appointment-table.service';
import { HomeScreenComponent } from './home-screen.component';

/**
 * Have problem with rendering HomeScreen using material library. Need more time to find out the way of doing
 * Testing with Material Angular
 * 
 */

describe('HomeScreenComponent', () => {
  let component: HomeScreenComponent;
	let fixture: ComponentFixture<HomeScreenComponent>;
	let routerSpy: { navigate: jasmine.Spy };
	let appointmentTableServiceSpy: any;
	let breakpointObserverSpy: {
		observe: jasmine.Spy,
		isMatched: jasmine.Spy
	};
	let platformSpy: any;

  beforeEach(async () => {
		routerSpy = jasmine.createSpyObj('Router', ['navigate']);
		appointmentTableServiceSpy = 
			jasmine.createSpyObj('AppointmentTableService', ['retrieveDataSource', 'getDisplayColumns', 'retrieveAppointmentColumnDefinition']);
		breakpointObserverSpy = jasmine.createSpyObj('BreakpointObserver', ['observe', 'isMatched']);

		platformSpy = {
			IOS: false,
			ANDROID: false,
		}

    // await TestBed.configureTestingModule({
		// 	declarations: [ HomeScreenComponent ],
		// 	imports: [
		// 		MatTableModule,
		// 		MatIconModule,
		// 		MatSortModule
		// 	],
		// 	providers: [
		// 		{ provide: AppointmentTableService, useValue: appointmentTableServiceSpy},
		// 		{ provide: Router, useValue: routerSpy },
		// 		{ provide: BreakpointObserver, useValue: breakpointObserverSpy },
		// 		{ provide: Platform, useValue: platformSpy },
		// 	],
		// 	schemas: [NO_ERRORS_SCHEMA]
    // }).compileComponents()
  });

  // it('should create', () => {
	// 	//check render for browser
	// 	breakpointObserverSpy.isMatched.and.callFake(() => false)
	// 	breakpointObserverSpy.observe.and.callFake(() => {
	// 		return {
	// 			subscribe: () => {}
	// 		}
	// 	});


	// 	fixture = TestBed.createComponent(HomeScreenComponent)
	// 	component = fixture.componentInstance;
		
  //   expect(component).toBeTruthy();
  // });
});
