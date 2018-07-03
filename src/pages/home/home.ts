import { Component } from '@angular/core';
import { App,NavController } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
abc;

  constructor(public navCtrl: NavController,public appCtrl: App) {
    this.abc = "one";
  }
  
  openProfilePage()
{
  this.appCtrl.getRootNav().push(UserProfilePage);
//this.navCtrl.push(UserProfilePage);
}

}
