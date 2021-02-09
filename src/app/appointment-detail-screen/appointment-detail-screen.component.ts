import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, first, switchMap } from 'rxjs/operators';

import {Appointment, AppointmentListService} from '../appointment-list.service';

@Component({
  selector: 'app-appointment-detail-screen',
  templateUrl: './appointment-detail-screen.component.html',
  styleUrls: ['./appointment-detail-screen.component.scss']
})
export class AppointmentDetailScreenComponent implements OnInit {
	appointmentDetail: Appointment | undefined;
	errorMessage: string | undefined;
	isLoading: boolean = false;

  constructor(
		private route: ActivatedRoute,  
		private appointmentService: AppointmentListService
	) { 

	}

  async ngOnInit(): Promise<void> {
		this.isLoading = true;
		this.route.paramMap.pipe(
			switchMap((param: ParamMap) => {
				const appointmentId: number = Number(param.get('id'));
				return this.appointmentService.getAppointmentDetailById(appointmentId)
			})
		).subscribe((data: Appointment) => {
			this.appointmentDetail = data;
			this.isLoading = false;
		}, ((error: any) => {
			this.errorMessage = error;
			this.isLoading = false;
		}))
  }
}
