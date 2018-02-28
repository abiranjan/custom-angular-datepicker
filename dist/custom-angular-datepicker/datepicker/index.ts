import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleModule, OverlayModule, PortalModule, A11yModule } from '../core';
import { CustomDatepicker, CustomDatepickerContent } from './datepicker';
import { CustomDatepickerToggle } from './datepicker-toggle';
import { CustomCalendar } from './calendar';
import { CustomMonthView } from './month-view';
import { CustomYearView } from './year-view';
import { CustomCalendarBody } from './calendar-body';
import { CustomClock } from './clock';
import { DateLocale } from './date-locale';
import { DateUtil } from './date-util';


export * from './datepicker';
export * from './month-view';
export * from './year-view';
export * from './calendar-body';
export * from './clock';
export * from './date-locale';
export * from './date-util';


@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    StyleModule,
    A11yModule,
  ],
  exports: [
    CustomDatepicker,
    CustomDatepickerToggle,
    CustomCalendar,
    CustomCalendarBody,
    CustomCalendar,
    CustomMonthView,
    CustomYearView,
    CustomCalendarBody,
    CustomClock,
  ],
  declarations: [
    CustomDatepicker,
    CustomDatepickerContent,
    CustomDatepickerToggle,
    CustomCalendar,
    CustomMonthView,
    CustomYearView,
    CustomCalendarBody,
    CustomClock,
  ],
  providers: [DateLocale, DateUtil],
  entryComponents: [
    CustomDatepickerContent
  ]
})
export class CustomDatepickerModule { }
