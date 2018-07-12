import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import { SHARED_FORM_DIRECTIVES } from '@angular/forms/src/directives';
/**
 * Generated class for the Map3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map3',
  templateUrl: 'map3.html',
})
export class Map3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Map3Page');
      console.log("inside init map");
      let c = this.navParams.get('data')
      var myLatLng = {lat: c.latitude, lng:c.longitude};

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
      });

      var marker = new google.maps.Marker(
        {
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      },
    );
   
     //marker.showInfoWindow();


//     map.one(plugin.google.maps.event.MAP_READY,()=>{
//       map.addMarker({
//     'position': {
//       lat: 0,
//       lng: 0
//     },
//     title: "Hello Cordova Google Maps\n for iOS and Android",
//     snippet: "This plugin is awesome!"
//   }, function(marker) {

//     // Display the infoWindow
//     marker.showInfoWindow();

//   });
// });
//   }

}
}