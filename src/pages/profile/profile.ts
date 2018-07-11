import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditProfilePage} from '../edit-profile/edit-profile';
import { UserProfilePage } from '../user-profile/user-profile';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 abc="one";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openEditProfilePage(){
    this.navCtrl.push(EditProfilePage);
  }
  openUserProfilePage(){
    this.navCtrl.push(UserProfilePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
