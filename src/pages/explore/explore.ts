import { Component } from '@angular/core';
import { IonicPage,App, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { DatePopoverPage } from '../date-popover/date-popover';
import { EventPopoverPage } from '../event-popover/event-popover';
import { ModalController } from 'ionic-angular';
import { CityPage } from '../city/city';
import { ProfilePage } from '../profile/profile';
import { EventProfilePage } from '../event-profile/event-profile';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Http } from '@angular/http';
import { Timestamp } from 'rxjs';

export interface trendingEvents{      //to get data from Events table
  id: string,
  name: string,
  pic: string,
  people: number,
  city: string,
  dated: Date,
  category: string
}
@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {
  myemail;
  mypic;
  eventTrendImg=[];              //Array to hold trending events image path
  eventTrendId= []; 
  eventTrendName=[];
  businessTrendImg=[];
  businessTrendId=[];
  businessTrendName=[];
  sportsTrendImg=[];
  sportsTrendId=[];
  sportsTrendName=[];
  exhibitionsTrendImg=[];
  exhibitionsTrendId=[];
  exhibitionsTrendName=[];
  cityName = "Jaipur";
  dateName = "All Dates";
  eventName = "All Events";
  Search = "Search";
  StringToSplit;
  eventsCollection: AngularFirestoreCollection<trendingEvents>;
  eventsInTrend: Observable<trendingEvents[]>;
  constructor(public navCtrl: NavController,public appCtrl: App, public navParams: NavParams, 
    public modalCtrl: ModalController, public popoverCtrl: PopoverController,
    public http: HttpClient, db: AngularFirestore, public httpm: Http, public afAuth:AngularFireAuth) {

      let u = this.afAuth.auth.currentUser;
    if (u != null) {
        u.providerData.forEach( (profile)=> {
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
       this.myemail = profile.email;
       this.mypic = profile.photoURL;
       
});
    }

      this.eventsCollection = db.collection<trendingEvents>("Events");
      this.eventsInTrend = this.eventsCollection.valueChanges();    

    this.eventtrends();
    this.businessevents();

    this.eventsCollection.ref.where("Category","==","Sports")
      .get()
      .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
      this.sportsTrendImg.push(doc.data().Pic);
      this.sportsTrendId.push(doc.data().EventId);
      this.sportsTrendName.push(doc.data().Name);
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
    });

    this.eventsCollection.ref.where("Category","==","Exhibition")
      .get()
      .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
      this.exhibitionsTrendImg.push(doc.data().Pic);
      this.exhibitionsTrendId.push(doc.data().EventId);
      this.exhibitionsTrendName.push(doc.data().Name);
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
    });
  }
  eventtrends()
  {
    let cityView = this.cityName
      this.eventsCollection.ref.where("City","==", cityView).orderBy("PeopleGoing", "desc").limit(8)
      .get()
      .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
      this.eventTrendImg.push(doc.data().Pic);
      this.eventTrendId.push(doc.data().EventId);
      this.eventTrendName.push((doc.data().Name));
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
    });
  }
  businessevents()
  {
    this.eventsCollection.ref.where("Category","==", "Business")
      .get()
      .then((querySnapshot) => {
      querySnapshot.forEach((doc) => { 
      this.businessTrendImg.push(doc.data().Pic);
      this.businessTrendId.push(doc.data().EventId);
      this.businessTrendName.push(doc.data().Name);
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
    });
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
  openEventProfilePage(eid)
  {
    this.navCtrl.push(EventProfilePage, {
      data1: this.myemail,
      data2: eid
    });
  }
 
  openUserProfilePage(){
    this.appCtrl.getRootNav().push(ProfilePage);
  }
}


