import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Map1Page } from '../map1/map1';
import { Map3Page } from '../map3/map3';

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
  openMap1Page(){
    this.navCtrl.push(Map1Page);
  }
  openMap3Page(){
    this.navCtrl.push(Map3Page);
  }
}
