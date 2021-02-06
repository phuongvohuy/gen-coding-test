import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentDetailScreenComponent } from './appointment-detail-screen.component';

describe('AppointmentDetailScreenComponent', () => {
  let component: AppointmentDetailScreenComponent;
  let fixture: ComponentFixture<AppointmentDetailScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentDetailScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
