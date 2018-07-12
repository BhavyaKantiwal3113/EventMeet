import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  EventImg=[];
  EventId=[];
  EventName=[];
  EventUpDate=[];
  eventsCollection: AngularFirestoreCollection<trendingEvents>;
  eventsInTrend: Observable<trendingEvents[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: HttpClient, db: AngularFirestore, public httpm: Http) {
      this.eventsCollection = db.collection<trendingEvents>("Events");
      this.eventsInTrend = this.eventsCollection.valueChanges();   
      
      let date1 = new Date(Date.now());
    this.eventsCollection.ref.where("Dated",">=", date1).orderBy("Dated", "asc").limit(5)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.EventName.push(doc.data().Name);
      this.EventImg.push(doc.data().Pic);
      let date        = new Date(doc.data().Dated.seconds * 1000),
      datevalues  = [
                       date.getFullYear(),
                       date.getMonth()+1,
                       date.getDate(),
                       date.getHours(),
                       date.getMinutes(),
                       date.getSeconds(),
                    ];
                    var formatDate =  datevalues[2]+"/"+datevalues[1]+"/"+datevalues[0];
                    console.log(formatDate);
      this.EventUpDate.push(formatDate);
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

}
