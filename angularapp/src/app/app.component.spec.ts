import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BusBookingFormComponent } from './bus-booking-form/bus-booking-form.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent, BusBookingFormComponent]
  }));

  it('should have as title Bus Booking App', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Bus Booking App');
  });

  it('should render the app bus booking form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appBusBookingForm = fixture.nativeElement.querySelector('app-bus-booking-form');
    expect(appBusBookingForm).toBeTruthy();
  });
});
