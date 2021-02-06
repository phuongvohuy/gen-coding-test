import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AppointmentDetailScreenComponent } from './appointment-detail-screen/appointment-detail-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    AppointmentDetailScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
