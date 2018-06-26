import { NgModule } from '@angular/core';
import { IonicModule , IonicPageModule } from 'ionic-angular';
import { UserProfilePage } from './user-profile';

@NgModule({
  declarations: [
    UserProfilePage,
  ],
  imports: [
    IonicModule.forRoot(IonicPageModule,{
      backButtonText: '',
      backButtonIcon: 'ios-close',
      iconMode: 'md'
    }),
    IonicPageModule.forChild(UserProfilePage)
   
  ]
})
export class UserProfilePageModule {}
