import { Component, ViewChild } from '@angular/core';
import { App,NavController,NavParams, Slides } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { first } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
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
  mypic;
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  eventsCollection: AngularFirestoreCollection<trendingEvents>;
  eventsInTrend: Observable<trendingEvents[]>;
  eventTrendImg=[];              //Array to hold trending events image path
  eventTrendId= [];              //Array to hold trending events id
  eventUpImg=[];                //Array to hold upcoming events id
  eventUpId = [];               
  eventUpName = [];
  eventUpCity = [];
  eventUpDate = [];
  constructor(public navCtrl: NavController,public appCtrl: App, public navParams: NavParams,
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

 
               
    let date1 = new Date(Date.now());
    
    this.eventsCollection.ref.where("Dated",">=", date1).orderBy("Dated", "asc").limit(8)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.eventUpName.push(doc.data().Name);
      this.eventUpCity.push(doc.data().City);
      this.eventUpImg.push(doc.data().Pic);
      this.eventUpId.push(doc.data().EventId);
      
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
      this.eventUpDate.push(formatDate);
     
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
    });
  }
  
     
  openProfilePage(){
    this.appCtrl.getRootNav().push(ProfilePage, {
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
