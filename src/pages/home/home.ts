import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
abc;

  constructor(public navCtrl: NavController) {
    this.abc = "one";
  }
  
  openProfilePage()
{
this.navCtrl.push(UserProfilePage);
}

}
