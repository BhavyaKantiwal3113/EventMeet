import { NgModule, ErrorHandler } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NguiMapModule} from '@ngui/map';
import { Camera } from '@ionic-native/camera';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
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

import {Map1Page} from '../pages/map1/map1';
import {Map3Page} from '../pages/map3/map3';

@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    EditProfilePage,
    AboutPage,
    HomePage,
    NotificationsPage,
    ProfilePage,
    UserProfilePage,
    SelectCategoriesPage,
    IntroPage,
    
    CityPage,
    Map1Page,
    Map3Page,
    EventPopoverPage,
    DatePopoverPage,
    TermsPage,
    EventProfilePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyChtIus3arMIhw9IROgfuFiWghMaCIwLL4'}),
    IonicImageViewerModule,
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
    EditProfilePage,
    HomePage,
     ExplorePage,
          NotificationsPage,
     UserProfilePage,
     SelectCategoriesPage,
     IntroPage,
     CityPage,
     Map1Page,
     Map3Page,
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
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
