import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AppointmentDetailScreenComponent } from './appointment-detail-screen/appointment-detail-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';
import {PlatformModule} from '@angular/cdk/platform';
import {MatSortModule} from '@angular/material/sort';

import {AppointmentListService} from './appointment-list.service';
import {AppointmentTableService} from './appointment-table.service';

import { AppointmentPipe } from './appointment-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
		AppointmentDetailScreenComponent,
		AppointmentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		BrowserAnimationsModule,
		MatTableModule,
		MatProgressSpinnerModule,
		MatIconModule,
		HttpClientModule,
		LayoutModule,
		PlatformModule,
		MatSortModule
  ],
  providers: [
		AppointmentListService,
		AppointmentTableService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
