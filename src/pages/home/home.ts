import { Component, ViewChild } from '@angular/core';
import { App,NavController,NavParams, Slides } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { first } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http } from '@angular/http';
export interface trendingEvents{      //to get data from Events table
   id: string,
   name: string,
   pic: string,
   people: number
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
  eventimg=[];
  constructor(public navCtrl: NavController,public appCtrl: App, public navParams: NavParams, public http: HttpClient, db: AngularFirestore, public httpm: Http) {
    this.myemail = navParams.get('data');
   this.eventsCollection = db.collection<trendingEvents>("Events");
   this.eventsInTrend = this.eventsCollection.valueChanges();
  // this.events = this.eventsCollection.ref.orderBy("PeopleGoing", "desc").limit(8);
  this.eventsCollection.ref.where("PeopleGoing", ">=", 100)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.eventimg.push(doc.data().Pic);
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
});
  }
  
  openProfilePage()
{
  this.appCtrl.getRootNav().push(UserProfilePage);
}

}
