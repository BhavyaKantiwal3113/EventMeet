import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { GooglePlus} from '@ionic-native/google-plus';
import { AngularFireModule} from 'angularfire2';
//import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
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
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SplashPage } from '../pages/splash/splash';
 import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import {Map3Page} from '../pages/map3/map3';
import { UserProvider } from '../providers/user/user';
import { AngularFirestore } from 'angularfire2/firestore';
import { CitySubscriptionPage } from '../pages/city-subscription/city-subscription';


export const firebaseConfig = {
  apiKey: "AIzaSyBxCLgie5yAgTV9I6C5T56z26Yv2XiOGeM",
  authDomain: "demofirestore-41a91.firebaseapp.com",
  databaseURL: "https://demofirestore-41a91.firebaseio.com",
  projectId: "demofirestore-41a91",
  storageBucket: "demofirestore-41a91.appspot.com",
  messagingSenderId: "32395217535"
}
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
   
    MyApp,
    ExplorePage,
    EditProfilePage,
    AboutPage,
    SplashPage,
    HomePage,
    NotificationsPage,
    ProfilePage,                  // view profile page
    UserProfilePage,              // user's first profile page
    SelectCategoriesPage,
    IntroPage,
    CityPage,
    Map1Page,
    Map3Page,
    EventPopoverPage,
    DatePopoverPage,
    TermsPage,
    EventProfilePage,
    TabsPage,                  // to control tabs
    CitySubscriptionPage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    HttpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyChtIus3arMIhw9IROgfuFiWghMaCIwLL4'}),
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
    },
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
     SplashPage,
     EventPopoverPage,
     DatePopoverPage,
     TermsPage,
     EventProfilePage,
    TabsPage,
    CitySubscriptionPage
  ],
  providers: [ UserProvider,
    StatusBar,
    SplashScreen,
    Camera,
    NativeGeocoder,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GooglePlus,
  ]
})
export class AppModule {}