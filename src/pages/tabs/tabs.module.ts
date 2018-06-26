import { NgModule } from '@angular/core';
import { IonicModule , IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicModule.forRoot(IonicPageModule,{
      backButtonText: '',
      backButtonIcon: 'ios-close',
      iconMode: 'md'
    }),
    IonicPageModule.forChild(TabsPage)
   
  ]
})
export class UserProfilePageModule {}
