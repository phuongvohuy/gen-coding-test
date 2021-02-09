import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentListService, Appointment } from '../appointment-list.service';
import { AppointmentTableService, AppointmentColumn} from '../appointment-table.service';

import {navigateToAppointmentDetailPage} from '../app-routing.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


const MAX_WIDTH = '(max-width: 600px)';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
	styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit, AfterViewInit {
	displayedColumns: Array<string> = [];
	appointments: Array<any> = [];
	dataSource: MatTableDataSource<Appointment>;
	columnsDataDefinition: Array<AppointmentColumn> = [];
	renderColumns: Array<AppointmentColumn> = [];

	loading: boolean = true;
	isMobile: boolean = false;
	isSmallScreen: boolean = false;
	
  constructor(
		private appointmentTableService: AppointmentTableService,
		private router: Router,
		private breakpointObserver: BreakpointObserver,
		private platform: Platform
		
	) {
		const layoutChanges = breakpointObserver.observe(MAX_WIDTH);
		layoutChanges.subscribe(result => {
			this.isSmallScreen = breakpointObserver.isMatched(MAX_WIDTH);
		});
		
		this.isMobile = platform.IOS || platform.ANDROID;

		this.isSmallScreen = breakpointObserver.isMatched(MAX_WIDTH);
		
		this.dataSource = new MatTableDataSource(this.appointments);
	 }

	ngAfterViewInit() {
		
  }

  async ngOnInit(): Promise<void> {
		this.loading = true;
		this.appointments = await this.appointmentTableService.retrieveDataSource();
		this.dataSource = new MatTableDataSource(this.appointments);
		
		// testing for demonstrate show loading
		await of().pipe(delay(1000)).toPromise();

		this.displayedColumns = this.appointmentTableService.getDisplayColumns();
		this.columnsDataDefinition = this.appointmentTableService.retrieveAppointmentColumnDefinition();
		this.renderColumns = this.columnsDataDefinition.filter((item: AppointmentColumn) => {
			return this.displayedColumns.find((displayItem: string) => displayItem === item.name) !== undefined;
		})

		this.loading = false;
	}
	
	onChooseRowHandler(appointmentItem: Appointment): void {
		navigateToAppointmentDetailPage(this.router, appointmentItem.id);
	}

	onEditHandler(appointmentItem: Appointment): void {
		navigateToAppointmentDetailPage(this.router, appointmentItem.id);
	}

	onDeleteHandler(appointmentItem: Appointment): void {
		this.appointments = this.appointments.filter(item => item.id !== appointmentItem.id);
		this.dataSource = new MatTableDataSource(this.appointments);
	}
}
