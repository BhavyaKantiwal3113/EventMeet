import { NgModule, ErrorHandler } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Camera } from '@ionic-native/camera';
import { ExplorePage } from '../pages/explore/explore';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { SelectCategoriesPage } from '../pages/select-categories/select-categories';
import { IntroPage } from '../pages/intro/intro';
import { ProfilePage} from '../pages/profile/profile';
import { NotificationsPage} from '../pages/notifications/notifications';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CityPage } from '../pages/city/city';
import { EventPopoverPage } from '../pages/event-popover/event-popover';
import { DatePopoverPage } from '../pages/date-popover/date-popover';
import { TermsPage } from '../pages/terms/terms';
import { OrgProfilePage } from '../pages/org-profile/org-profile';

@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    EditProfilePage,
    AboutPage,
    ContactPage,
    HomePage,
    NotificationsPage,
    ProfilePage,
    UserProfilePage,
    SelectCategoriesPage,
    IntroPage,
    CityPage,
    EventPopoverPage,
    DatePopoverPage,
    TermsPage,
    OrgProfilePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
  
      // backButtonText: '',
      // backButtonIcon: 'ios-close',
      // iconMode: 'md'
  
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      //  backButtonIcon: 'ios-close',
      //  iconMode: 'md',
      backButtonIcon:'arrow-back',
      tabsPlacement: 'bottom',
      platforms: {
        ios: {
          tabsPlacement: 'bottom',
        }
      }
    }
  )],
   
     bootstrap: [IonicApp],
    entryComponents: [
    MyApp,
    AboutPage,
    ProfilePage,
    ContactPage,
    EditProfilePage,
    HomePage,
     ExplorePage,
     NotificationsPage,
     UserProfilePage,
     SelectCategoriesPage,
     IntroPage,
     CityPage,
     EventPopoverPage,
     DatePopoverPage,
     TermsPage,
     OrgProfilePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
