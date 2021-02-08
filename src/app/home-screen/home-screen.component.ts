import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppointmentListService, Appointment } from '../appointment-list.service';
import { AppointmentTableService, AppointmentColumn} from '../appointment-table.service';

import {navigateToAppointmentDetailPage} from '../app-routing.module';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
	styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
	displayedColumns: Array<string> = [];
	dataSource: Array<Appointment> = [];
	columnsDataDefinition: Array<AppointmentColumn> = []
	
  constructor(
		private appointmentTableService: AppointmentTableService,
		private router: Router
	) { }

  async ngOnInit(): Promise<void> {
		this.dataSource = await this.appointmentTableService.retrieveDataSource();
		this.displayedColumns = this.appointmentTableService.getDisplayColumns();
		this.columnsDataDefinition = this.appointmentTableService.retrieveAppointmentColumnDefinition();
	}
	
	onChooseRowHandler(appointmentItem: Appointment): void {
		console.log('onChooseRowHandler', appointmentItem);
		//this.router.navigate(['appointment-detail']);
		navigateToAppointmentDetailPage(this.router, appointmentItem.id);
	}
}
