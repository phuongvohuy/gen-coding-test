import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import {HomeScreenComponent} from './home-screen/home-screen.component';
import {AppointmentDetailScreenComponent} from './appointment-detail-screen/appointment-detail-screen.component';

//export const 

export const PageName = {
	HOME_PAGE: '',
	APPOINTMENT_DETAIL: 'appointment-detail'
}

export const navigateToAppointmentDetailPage = (router: Router, appointmentId: number) => {
	router.navigate([PageName.APPOINTMENT_DETAIL, appointmentId])
}

const routes: Routes = [{
	path: PageName.HOME_PAGE, 
	component: HomeScreenComponent,
}, {
	path: PageName.APPOINTMENT_DETAIL + '/:id', 
	component: AppointmentDetailScreenComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
