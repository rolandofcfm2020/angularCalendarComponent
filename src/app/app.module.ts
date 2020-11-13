import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './components/calendar/calendar.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { FlatpickrModule } from 'angularx-flatpickr';
// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// import { CalendarComponent } from './components/calendar/calendar.component';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     NgbModalModule,
//     FlatpickrModule.forRoot(),
//     CalendarModule.forRoot({
//       provide: DateAdapter,
//       useFactory: adapterFactory,
//     }),
//   ],
//   declarations: [CalendarComponent],
//   exports: [CalendarComponent],
// })
// export class AppModule {}
