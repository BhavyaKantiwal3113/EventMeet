import { NgModule } from '@angular/core';
import { IonicModule , IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';


@NgModule({
    declarations: [
      HomePage,
    ],
    imports: [
        IonicModule.forRoot(IonicPageModule,{
            backButtonText: '',
            backButtonIcon: 'ios-close',
            iconMode: 'md'
          }),
      IonicPageModule.forChild(HomePage)
     
    ]
  })
  export class UserProfilePageModule {}
  