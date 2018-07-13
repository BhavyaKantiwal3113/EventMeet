import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the EventPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-popover',
  templateUrl: 'event-popover.html',
})
export class EventPopoverPage {
  eList = ['All Events','Business', 'Sports', 'Exhibition', 'Entertainment', 
  'Health n Wellness','Music', 'Theatre','Festivals','Food n Drinks','Party'];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPopoverPage');
  }
  close(selValue) {
    this.viewCtrl.dismiss(selValue);
  }
}
