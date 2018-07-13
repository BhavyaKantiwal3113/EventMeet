import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the CityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {
  
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.initializeItems(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPage');
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  initializeItems() {
    this.items = [
     "Ahmedabad",
     'Jaipur',
     'Mumbai',
     'New Delhi',
     'Panaji'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  selCity(city)
  {
    this.viewCtrl.dismiss(city);      //send selected city to explore page
  }
}
