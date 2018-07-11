import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';
import { TermsPage } from '../terms/terms';
import { SelectCategoriesPage } from '../select-categories/select-categories';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { IntroPage } from '../intro/intro';
@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
 profile="assets/imgs/1.jpg";
  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth:AngularFireAuth) {
  }

openProfilePage(){
this.navCtrl.push(ProfilePage);
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
