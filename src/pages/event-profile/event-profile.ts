import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Map1Page } from '../map1/map1';
import { Map3Page } from '../map3/map3';

import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http } from '@angular/http';
export interface viewEvent{      //to get data from Events table
  id: string,
  name: string,
  pic: string,
  people: number,
  city: string,
  dated: Date
}
export interface  viewEventDetail{
  id: string,
  coordinates: Geolocation,
  createdBy: string,
  detail: string,
  location: string,
  state: string
}
export interface userRegister{
  Email: string,
  EventId: any
}
@IonicPage()
@Component({
  selector: 'page-event-profile',
  templateUrl: 'event-profile.html',
})
export class EventProfilePage {
  
  more = true;
  interested = true;
  eid;
  myemail;
  eventsCollection: AngularFirestoreCollection<viewEvent>;        //for Events collection
  eventView: Observable<viewEvent[]>;                             //for Events collection
  eventDetailCollection: AngularFirestoreCollection<viewEventDetail>; //for EventDetails collection
  eventDetailView: Observable<viewEventDetail[]>;                     //for EventDetails collectiion
  userRegisterCollection: AngularFirestoreCollection<userRegister>;
  registration: Observable<userRegister[]>;
  newMember: any = {};
  currEvent: any = {};
  currEventDetail={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, db: AngularFirestore, public httpm: Http) {
    this.myemail = navParams.get('data1');
    this.eid = navParams.get('data2');
    this.eventsCollection = db.collection<viewEvent>("Events");
    this.eventView = this.eventsCollection.valueChanges();

    // this.userRegisterCollection = db.collection<userRegister>("UserRegisterForEvent");
    // this.registration = this.userRegisterCollection.valueChanges();

    this.eventDetailCollection = db.collection<viewEventDetail>("EventDetails");
    this.eventDetailView = this.eventDetailCollection.valueChanges();
    let id = this.eid;
    this.eventsCollection.ref.where("EventId", "==",id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
      this.currEvent = doc.data();
      console.log(this.currEvent);
      //console.log(this.currEvent.PeopleGoing);
      });
    }).catch(function(error) {
      console.log("Error getting document:", error);
  });
  this.eventDetailCollection.ref.where("EventId", "==", id)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
     this.currEventDetail = doc.data();
     console.log(this.currEventDetail);
    });
  }).catch(function(error) {
    console.log("Error getting document:", error);
});
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventProfilePage');
  }
 
  toggleSection()
  {
    this.more = !this.more;
  }
  goInEvent()
  {
    let id = this.eid.substr(1);
    
    this.currEvent.PeopleGoing++;
    this.eventsCollection.doc(""+id).update(this.currEvent);
  //   let myemailid = this.myemail;
  //   this.userRegisterCollection.ref.where("Email", "==", myemailid)
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       this.newMember = doc.data();
  //      for(let i = 0; i<doc.data().EventId.length; i++)
  //      {
  //        if(id == doc.data().EventId[i])
  //        this.interested = true;
  //        else
  //        {
  //          this.newMember.EventId.push(this.eid);
  //          this.userRegisterCollection.doc(this.myemail).update(this.newMember);
  //          this.interested =!this.interested;
  //        }
  //      }
  //     });
  //   }).catch(function(error) {
  //     console.log("Error getting document:", error);
  // });
    
  }
  openMap1Page(){
    this.navCtrl.push(Map1Page);
  }
  openMap3Page(){
    this.navCtrl.push(Map3Page);
  }
}
