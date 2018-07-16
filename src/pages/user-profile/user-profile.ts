import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';
import { TermsPage } from '../terms/terms';
import { SelectCategoriesPage } from '../select-categories/select-categories';
import { CitySubscriptionPage } from '../city-subscription/city-subscription';
import { AboutPage } from '../about/about';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { IntroPage } from '../intro/intro';
import { FeedbackPage } from '../feedback/feedback';
import { HelpPage } from '../help/help';
@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
//  myemail;
//  mypic;        //Changes here
//  myname;
 myemail = "guest@gmail.com";         //remove 3 lines on removing guestlogin
 mypic = "./assets/imgs/1.jpg";
 myname = "Guest";

  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth:AngularFireAuth) {
      // this.myemail = navParams.get('data1');
      // this.mypic = navParams.get('data2');         //Changes here
      // this.myname = navParams.get('data3');
     
  }
  // openCitySubscriptionPage(){
  //   this.navCtrl.push(CitySubscriptionPage,
  //   {
  //     data1: this.myemail,
  //     data3: "userProfile"
  //   });
  // }
  openAboutPage(){
    this.navCtrl.push(AboutPage);
  }
openProfilePage(){
this.navCtrl.push(ProfilePage);
}
openFeedbackPage(){
this.navCtrl.push(FeedbackPage);
}
openHelpPage(){
this.navCtrl.push(HelpPage);
}
openNotificationsPage()
{
this.navCtrl.push(NotificationsPage);
}
openTermsPage()
{
  this.navCtrl.push(TermsPage);
}
openSelectCategoriesPage()
  {
    this.navCtrl.push(SelectCategoriesPage, {
      data: this.myemail,
    });
  }
    logout() {
    this.afAuth.auth.signOut();
    this.navCtrl.push(IntroPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

}
