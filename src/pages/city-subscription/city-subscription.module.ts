import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitySubscriptionPage } from './city-subscription';

@NgModule({
  declarations: [
    CitySubscriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(CitySubscriptionPage),
  ],
})
export class CitySubscriptionPageModule {}
