import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CustomDatepicker } from './datepicker';


@Component({
  moduleId: module.id,
  selector: 'button[CustomDatepickerToggle]',
  template: '',
  styleUrls: ['datepicker-toggle.scss'],
  host: {
    'type': 'button',
    'class': 'Custom-datepicker-toggle',
    'aria-label': 'Open calendar',
    '(click)': '_open($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDatepickerToggle<D> {
  /** Datepicker instance that the button will toggle. */
  @Input('CustomDatepickerToggle') datepicker: CustomDatepicker;

  _open(event: Event): void {
    if (this.datepicker) {
      this.datepicker.open();
      event.stopPropagation();
    }
  }
}
