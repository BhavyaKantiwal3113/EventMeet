import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';
import { TermsPage } from '../terms/terms';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
 profile="assets/imgs/1.jpg";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

}
