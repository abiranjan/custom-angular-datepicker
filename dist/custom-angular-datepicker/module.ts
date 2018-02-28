import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {
  MdRippleModule,
  RtlModule,
  PortalModule,
  OverlayModule,
  A11yModule,
  CompatibilityModule,
  MdNativeDateModule,
} from './core/index';

import { CustomDatepickerModule } from './datepicker';

import { PlatformModule } from './core/platform/index';
import { StyleModule } from './core/style/index';

const Custom_MODULES = [
  CustomDatepickerModule,
  MdRippleModule,
  OverlayModule,
  PortalModule,
  RtlModule,
  StyleModule,
  A11yModule,
  PlatformModule,
  CompatibilityModule,
  MdNativeDateModule,
  BrowserAnimationsModule
];

@NgModule({
  imports: Custom_MODULES,
  exports: Custom_MODULES,
})
export class CustomDateModule { }
