import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProfilePage } from '../event-profile/event-profile';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http } from '@angular/http';
export interface trendingEvents{      //to get data from Events table
  id: string,
  name: string,
  pic: string,
  city: string,
  dated: Date,
  category: string
}

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  myemail;
  EventImg=[];
  EventId=[];
  EventName=[];
  eventsCollection: AngularFirestoreCollection<trendingEvents>;
  eventsInTrend: Observable<trendingEvents[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, db: AngularFirestore, public httpm: Http) {
      let cityName = navParams.get('data1');
      let categorytName = navParams.get('data2');
      this.myemail = navParams.get('data3');
      this.eventsCollection = db.collection<trendingEvents>("Events");
      this.eventsInTrend = this.eventsCollection.valueChanges();    
      if(categorytName !="All Events")
    {  this.eventsCollection.ref.where("Category","==", categorytName).where("City","==",cityName)
      .get()
      .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
      this.EventImg.push(doc.data().Pic);
      this.EventId.push(doc.data().EventId);
      this.EventName.push(doc.data().Name);
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
    });
  }
  else
  {
    this.eventsCollection.ref.where("City","==",cityName)
  .get()
  .then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
  this.EventImg.push(doc.data().Pic);
  this.EventId.push(doc.data().EventId);
  this.EventName.push(doc.data().Name);
});
console.log(this.EventId)
})
.catch(function(error) {
console.log("Error getting documents: ", error);
});

  }
  }
openEventProfilePage(eid){
  this.navCtrl.push(EventProfilePage, {
    data1: this.myemail,
    data2: eid
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}