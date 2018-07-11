import { Component, ViewChild } from '@angular/core';
import { App,NavController,NavParams, Slides } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { first } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http } from '@angular/http';
import { EventProfilePage } from '../event-profile/event-profile';
export interface trendingEvents{      //to get data from Events table
   id: string,
   name: string,
   pic: string,
   people: number,
   city: string
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myemail;
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  eventsCollection: AngularFirestoreCollection<trendingEvents>;
  eventsInTrend: Observable<trendingEvents[]>;
  eventTrendImg=[];              //Array to hold trending events image path
  eventTrendId= [];              //Array to hold trending events id
  eventUpImg=[];                //Array to hold upcoming events id
  eventUpId = [];               
  eventUpName = [];
  eventUpCity = [];
  constructor(public navCtrl: NavController,public appCtrl: App, public navParams: NavParams, public http: HttpClient, db: AngularFirestore, public httpm: Http) {
    this.myemail = navParams.get('data');
   this.eventsCollection = db.collection<trendingEvents>("Events");
   this.eventsInTrend = this.eventsCollection.valueChanges();

  this.eventsCollection.ref.orderBy("PeopleGoing", "desc").limit(8)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.eventTrendImg.push(doc.data().Pic);
      this.eventTrendId.push(doc.data().EventId);
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
    });

   // let currDate = Date.now();
    this.eventsCollection.ref.orderBy("Dated", "desc").limit(8)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.eventUpName.push(doc.data().Name);
      this.eventUpCity.push(doc.data().City);
      this.eventUpImg.push(doc.data().Pic);
      this.eventUpId.push(doc.data().EventId);
      // console.log(Date.now());
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
    });
  }
  
  openProfilePage()
  {
    this.appCtrl.getRootNav().push(UserProfilePage, {
      data: this.myemail
    });
  }
  openEventProfilePage(eid)
  {
    this.navCtrl.push(EventProfilePage, {
      data1: this.myemail,
      data2: eid
    });
  }
}
