import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';
import { EditProfilePage} from '../edit-profile/edit-profile';
import { TermsPage } from '../terms/terms';
import { SelectCategoriesPage } from '../select-categories/select-categories';
import { CitySubscriptionPage } from '../city-subscription/city-subscription';
import { AboutPage } from '../about/about';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { IntroPage } from '../intro/intro';
@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
 //profile="assets/imgs/1.jpg";
 myemail;
 mypic;
 myname;
  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth:AngularFireAuth) {
      this.myemail = navParams.get('data1');
      this.mypic = navParams.get('data2');
      this.myname = navParams.get('data3');
  }
  openCitySubscriptionPage(){
    this.navCtrl.push(CitySubscriptionPage);
  }
  openAboutPage(){
    this.navCtrl.push(AboutPage);
  }
openProfilePage(){
this.navCtrl.push(ProfilePage);
}
openEditProfilePage(){
  this.navCtrl.push(EditProfilePage);
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
    this.navCtrl.push(SelectCategoriesPage);
  }
    logout() {
    this.afAuth.auth.signOut();
    this.navCtrl.push(IntroPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

}
