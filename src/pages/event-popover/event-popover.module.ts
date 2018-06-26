import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventPopoverPage } from './event-popover';

@NgModule({
  declarations: [
    EventPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(EventPopoverPage),
  ],
})
export class EventPopoverPageModule {}
