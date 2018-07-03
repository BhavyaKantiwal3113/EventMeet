import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-event-profile',
  templateUrl: 'event-profile.html',
})
export class EventProfilePage {
  
  more = true;
  interested = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventProfilePage');
  }
  toggleSection()
  {
    this.more = !this.more;
  }
  goInEvent()
  {
    this.interested = !this.interested;
  }

}
