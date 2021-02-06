import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeScreenComponent} from './home-screen/home-screen.component';
import {AppointmentDetailScreenComponent} from './appointment-detail-screen/appointment-detail-screen.component';

const routes: Routes = [{
	path: '', 
	component: HomeScreenComponent,
}, {
	path: 'appointment-detail', 
	component: AppointmentDetailScreenComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
