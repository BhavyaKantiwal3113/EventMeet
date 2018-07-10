import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CityPage } from '../city/city';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { TabsPage} from '../tabs/tabs';
export interface mychoice{
  Email: string,
  //Categories: any,
  //Cities: any
}
@IonicPage()
@Component({
  selector: 'page-city-subscription',
  templateUrl: 'city-subscription.html',
})
export class CitySubscriptionPage {
  newemailid = 'email';    // newemailid fetched from selectCategoriesPage
  usercategory;  // fetched from selectCategoriesPage
  userRef: AngularFirestoreCollection<mychoice>;
  mycity = "Ahemadabad";
  cities = [
    {Name: "Ahemadabad", Selected: false},
    {Name: "Jaipur", Selected: false},
    {Name: "Mumbai", Selected: false},
    {Name: "New Delhi", Selected: false},
    {Name: "Panaji", Selected: false}];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public afAuth:AngularFireAuth, public http: HttpClient, db: AngularFirestore, public httpm: Http) {
      this.userRef = db.collection<mychoice>("UserEvent")
      this.newemailid = navParams.get('data1'); 
      this.usercategory = navParams.get('data2'); 
  
  }
  openModal() {
    const modal = this.modalCtrl.create(CityPage);
    modal.onDidDismiss(data => {
      this.mycity = data;
    });
    modal.present();
  }
  check(i){
    this.cities[i].Selected=!this.cities[i].Selected;
    console.log(this.cities[i]);
   }
   goToHomePage()
   { 
    this.userRef.doc(this.newemailid).set({
      Email: this.newemailid,
      Categories: this.usercategory,
      Cities: this.cities,
      FavCity: this.mycity
    });
     this.navCtrl.push(TabsPage, {
       data: this.newemailid
     });
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CitySubscriptionPage');
  }

}
