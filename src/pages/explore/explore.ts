import { Component } from '@angular/core';
import { IonicPage,App, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { DatePopoverPage } from '../date-popover/date-popover';
import { EventPopoverPage } from '../event-popover/event-popover';
import { ModalController } from 'ionic-angular';
import { CityPage } from '../city/city';
import { ProfilePage } from '../profile/profile';
import { EventProfilePage } from '../event-profile/event-profile';


@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {
  cityName = "Jaipur";
  dateName = "All Dates";
  eventName = "All Events";
  Search = "Search";
  constructor(public navCtrl: NavController, public appCtrl: App,public navParams: NavParams, public modalCtrl: ModalController, public popoverCtrl: PopoverController) {
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
  search(myEvent){
    
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
  openEventProfilePage(){
    this.navCtrl.push(EventProfilePage);
  }
 
  openUserProfilePage(){
    this.appCtrl.getRootNav().push(ProfilePage);
  }
}


