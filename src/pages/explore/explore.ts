import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { DatePopoverPage } from '../date-popover/date-popover';
import { EventPopoverPage } from '../event-popover/event-popover';
import { ModalController } from 'ionic-angular';
import { CityPage } from '../city/city';
import { UserProfilePage } from '../user-profile/user-profile';
import { EventProfilePage } from '../event-profile/event-profile';

/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {
  cityName = "Jaipur";
  dateName = "All Dates";
  eventName = "All Events";
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');
  }
  openModal() {
    const modal = this.modalCtrl.create(CityPage);
    modal.onDidDismiss(data => {
      this.cityName = data;
    });
    modal.present();
  }
  presentDatePopover(myEvent) {
    let popover = this.popoverCtrl.create(DatePopoverPage);
    popover.onDidDismiss(data => {
      this.dateName = data;
    });
    popover.present({
      ev: myEvent
    });
  }
  presentEventPopover(myEvent) {
    let popover = this.popoverCtrl.create(EventPopoverPage);
    popover.onDidDismiss(data => {
      this.eventName = data;
    });
    popover.present({
      ev: myEvent
    });
  }
 
  openEventProfilePage()
  {
    this.navCtrl.push(EventProfilePage);
  }
  openUserProfilePage()
  {
    this.navCtrl.push(UserProfilePage);
  }
}


