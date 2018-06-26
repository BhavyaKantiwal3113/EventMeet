import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatePopoverPage } from './date-popover';

@NgModule({
  declarations: [
    DatePopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(DatePopoverPage),
  ],
})
export class DatePopoverPageModule {}
