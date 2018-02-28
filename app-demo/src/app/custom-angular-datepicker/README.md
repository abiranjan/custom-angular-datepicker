# CustomDatepicker
Datepicker allow the user to select date and time.

##Usage - Angular

Add the Dependency of the directive in the module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomDateModule } from './custom-angular-datepicker/module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CustomDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## `<custom-datepicker>`
### Properties

| Name | Type | Description |
| --- | --- | --- |
| `type` | `'date'` &#124; `'time'` &#124; `'month'` &#124; `'datetime'` | The type of the datepicker |
| `required` | `boolean` | Whether or not the datepicker is required |
| `disabled` | `boolean` | Whether or not the datepicker is disabled |
| `min` | `date` | The min date of Datepicker. |
| `max` | `date` | The max date of Datepicker. |
| `placeholder` | `string` | Datepicker placeholder label |
| `format` | `string` | The date format of datepicker |
| `tabindex` | `number` | The tabIndex of the datepicker. |
| `timeInterval` | `number` | Select minutes in specific time interval, default is 1. |
| `openOnFocus` | `boolean` | Opend Calendar Whether or not the datepicker is openOnFocus. |
| `isOpen` | `boolean` | Opend Calendar Whether or not the datepicker is isOpen. |
| `dateFilter` | `(Date|null) => boolean` | Filter Dates for enabled with return boolean. |
| `mode` | `'auto'` &#124; `'portrait'` &#124; `'landscape'` | Mode of the Datepicker, default auto. |
| `touchUi` | `boolean` | Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather than a popup and elements have more padding to allow for bigger touch targets. |
| `startAt` | `Date` | The date to open the calendar to initially. |
| `startView` | `'clock'` &#124; `'month'` &#124; `'year'` | The view that the calendar should start in. Default 'month' |


### Events

| Name | Type | Description |
| --- | --- | --- |
| `change` | `Event` | Fired when change date |
| `onOpen` | `Event` | Fired when open the Datepicker Panel |
| `onClose` | `Event` | Fired when close the Datepicker Panel |

### Examples
A datepicker would have the following markup.
```html
<custom-datepicker [(ngModel)]="date"></custom-datepicker>
```

## CustomDatepickerToggle

#### Selector: button\[CustomDatepickerToggle]

| Name | Description |
| --- | --- |
| `CustomDatepickerToggle` | Datepicker instance that the button will toggle. |

### Examples
A datepicker toggle button would have the following markup.
```html
<custom-datepicker #birthday></custom-datepicker>
<button [CustomDatepickerToggle]="birthday"></button>
```

## Datepicker Locale Service
This `DateLocale` service that allows the user to specify months, daysOfWeek, dates, hours, minutes and firstDayOfWeek internationalization. The `DateLocale` service itself is consumed by `CustomDatepicker` component that deal with dates.

import { DateLocale } from 'custom-angular-datepicker';

| Name | Type | Description |
| --- | --- | --- |
| `months` | `Months = { long: Array<string>, short: Array<string>, narrow: Array<string> }` | Month Object with property long, short and narrow along with Array of month names (in order). |
| `daysOfWeek` | `DaysOfWeek = { long: Array<string>, short: Array<string>, narrow: Array<string> }` | DaysOfWeek Object with property long, short and narrow along with Array of the days of the week (in order). |
| `dates` | `Array<string>` | Array of dates of the month. Only necessary for locales using a numeral system other than ['1', '2', '3', ..., '31']. |
| `hours` | `Array<string>` | Array of hours of the clock. Only necessary for locales using a numeral system other than ['0', '1', '2', ..., '23']. |
| `minutes` | `Array<string>` | Array of minutes of the clock. Only necessary for locales using a numeral system other than ['0', '1', '2', ..., '59']. |
| `firstDayOfWeek` | `number` | The first day of the week. Sunday = 0, Monday = 1, etc. |

# Implementation for Datepicker Locale Service
1. Import the `DateLocale` service from `custom-angular-datepicker`
2. Re assign the values to the type you want to be changed. (ex.months here)

```typescript
import { DateLocale } from `custom-angular-datepicker`;
export class myComponent {
    private Month = {
                        'long': [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                    'October', 'November', 'December'],
                        'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
                    } ;
    constructor(private myDate : DateLocale) {
        this.myDate.months = this.Month;
            }
    }
```

### Date Format

| COMPONENT | SYMBOL | NARROW | SHORT FORM | LONG FORM        | NUMERIC | 2-DIGIT |
| --------- | ------ | ------ | ---------- | ---------------- | ------- | ------- |
| year      | `y`    | -      | -          | -                | y(2017) | yy(17)  |
| month     | `M`    | -      | MMM (Feb)  | MMMM (February)  | M(2)    | MM(02)  |
| day       | `d`    | -      | -          | -                | d(3)    | dd(03)  |
| hour      | `H`    | -      | -          | -                | H(13)   | HH(13)  |
| minute    | `m`    | -      | -          | -                | m(5)    | mm(05)  |
| second    | `s`    | -      | -          | -                | s(5)    | ss(05)  |
| am/pm     | `a`    | -      | -          | -                | -       | -       |
| AM/PM     | `A`    | -      | -          | -                | -       | -       |


#### Keyboard interaction:
- <kbd>LEFT_ARROW</kbd>: Focus a day backward
- <kbd>RIGHT_ARROW</kbd>: Focus a day forward
- <kbd>UP_ARROW</kbd>: Focus a week backward
- <kbd>DOWN_ARROW</kbd>: Focus a week forward
- <kbd>HOME</kbd>: Focus first day of the month
- <kbd>END</kbd>: Focus last day of the month
- <kbd>PAGE_UP</kbd>: Focus a month backward
- <kbd>PAGE_DOWN</kbd>: Focus a month forward
- <kbd>ALT + PAGE_UP</kbd>: Focus a year backward
- <kbd>ALT + PAGE_DOWN</kbd>: Focus a year forward
- <kbd>ENTER</kbd>: Select focused item

## License

This repository is open-source and available under the [MIT license](https://en.wikipedia.org/wiki/MIT_License). See the LICENSE file for more information.

MIT Â© [Abiranjan](mailto:abiranjan.p@gmail.com)