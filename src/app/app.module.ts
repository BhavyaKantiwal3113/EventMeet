import { NgModule, ErrorHandler } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Camera } from '@ionic-native/camera';
import { ExplorePage } from '../pages/explore/explore';
import { AboutPage } from '../pages/about/about';
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
import { EventProfilePage } from '../pages/event-profile/event-profile';


@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    EditProfilePage,
    AboutPage,
    HomePage,
    NotificationsPage,
    ProfilePage,                  // view profile page
    UserProfilePage,              // user's first profile page
    SelectCategoriesPage,
    IntroPage,
    CityPage,                    // popover to select city
    EventPopoverPage,            // popover to select date
    DatePopoverPage,
    TermsPage,
    EventProfilePage,
    TabsPage                    // to control tabs
  ],
  imports: [
    BrowserModule,
    IonicImageViewerModule,
  
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
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
     EventProfilePage,
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