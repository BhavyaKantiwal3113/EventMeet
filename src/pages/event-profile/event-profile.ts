import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  interested =  true;
  eid;
  myemail;
  eventsCollection: AngularFirestoreCollection<viewEvent>;        //for Events collection
  eventView: Observable<viewEvent[]>;                             //for Events collection
  eventDetailCollection: AngularFirestoreCollection<viewEventDetail>; //for EventDetails collection
  eventDetailView: Observable<viewEventDetail[]>;                     //for EventDetails collectiion
  userRegisterCollection: AngularFirestoreCollection<userRegister>;   //for UserRegisterForEvent collection
  registration: Observable<userRegister[]>;                           //for UserRegisterForEvent collection
  newMember: any = {};
  currEvent: any = {};
  currEventDetail={};
  firstHalfDetails : string;
  secondHalfDetails: string;
  EventUpDate;
  coordinates;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, db: AngularFirestore, public httpm: Http) {
    this.myemail = navParams.get('data1');
    this.eid = navParams.get('data2');
    this.eventsCollection = db.collection<viewEvent>("Events");
    this.eventView = this.eventsCollection.valueChanges();

    this.userRegisterCollection = db.collection<userRegister>("UserRegisterForEvent");
    this.registration = this.userRegisterCollection.valueChanges();

    this.eventDetailCollection = db.collection<viewEventDetail>("EventDetails");
    this.eventDetailView = this.eventDetailCollection.valueChanges();
    let id = this.eid;
    this.eventsCollection.ref.where("EventId", "==",id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
      this.currEvent = doc.data();
      let date        = new Date(doc.data().Dated.seconds * 1000),
      datevalues  = [
                       date.getFullYear(),
                       date.getMonth()+1,
                       date.getDate(),
                       date.getHours(),
                       date.getMinutes(),
                       date.getSeconds(),
                    ];
                    var formatDate =  datevalues[2]+"/"+datevalues[1]+"/"+datevalues[0]+" "+datevalues[3]+":"+datevalues[4];
                    console.log(formatDate);
      this.EventUpDate = formatDate;
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
     this.firstHalfDetails = doc.data().Detail.substr(0,133);
     this.secondHalfDetails = doc.data().Detail.substr(133);
     this.coordinates = doc.data().Coordinates;
     console.log(this.coordinates);
    });
  }).catch(function(error) {
    console.log("Error getting document:", error);
});

//let eid = this.eid;
    let myemailid = this.myemail;
    
    this.userRegisterCollection.ref.where("Email", "==", myemailid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.newMember = doc.data();
       for(let i = 0; i<doc.data().EventId.length; i++)
       {
         if(id == doc.data().EventId[i])
         {
           this.interested = false;
           break;}
       }
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
    let id = this.eid;
    let myemailid = this.myemail;
           console.log(myemailid +" goinevent");
           this.newMember.EventId.push(this.eid);
           this.userRegisterCollection.doc(this.myemail).update(this.newMember);
           this.interested =!this.interested;
           this.currEvent.PeopleGoing++;
           this.eventsCollection.doc(""+id.substr(1)).update(this.currEvent);
      
  }
  openMap3Page(){
    this.navCtrl.push(Map3Page,
    {
      data: this.coordinates
    });
  }
}
