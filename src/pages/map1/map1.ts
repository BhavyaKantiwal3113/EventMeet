import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the Map1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map1',
  templateUrl: 'map1.html',
})
export class Map1Page {
  //public center = 'Brampton, Canada';
  public positions = [ ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Map1Page');
  }
  onMapReady(map) {
    console.log('map', map);
    console.log('markers', map.markers);  // to get all markers as an array 

  }
  onIdle(event) {
    console.log('map', event.target);
  }
  onMarkerInit(marker) {
    console.log('marker', marker);
  }
  onMapClick(event) {
    this.positions.push(event.latLng);
    event.target.panTo(event.latLng);
    console.log(this.positions+"hi");
   // map.showInfoWindow();
  }

}
