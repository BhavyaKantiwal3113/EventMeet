import { Component } from '@angular/core';
import { IonicPage, App, NavController, NavParams } from 'ionic-angular';
import { EventProfilePage } from '../event-profile/event-profile';
import { UserProfilePage } from '../user-profile/user-profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http } from '@angular/http';

export interface Profile{         //to get data from UserProfile collection
  Email: string,
  Name: string,
  Pic: string
}

export interface userCatEvent{      //to get data from UserEvents collection
    category: [{}],
    city: [{}]
}

export interface trendingEvents{      //to get data from Events collection
  id: string,
  name: string,
  pic: string,
  dated: Date,
  category: string
}

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 abc="one";
 myemail;
 mypic;
 myname;
 myProfile: any = {};
 userCategoryChoiceArray : Array<string>;  //store categories from userEven
 userCityChoiceArray: Array<string>;
 TrendImg=[];
 TrendId=[];
 TrendName=[];                             t
 profileCollection: AngularFirestoreCollection<Profile>;
 profileView: Observable<Profile[]>;
 userEventCollection: AngularFirestoreCollection<userCatEvent>;
 userEventView: Observable<userCatEvent[]>;
 trendingEventCollection: AngularFirestoreCollection<trendingEvents>;
 trendingEventView: Observable<trendingEvents[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, db: AngularFirestore, public httpm: Http,public afAuth:AngularFireAuth, public appCtrl: App) {
    this.myemail = navParams.get('data');
    this.profileCollection = db.collection<Profile>("UserProfile");
    this.profileView = this.profileCollection.valueChanges();

    this.userEventCollection = db.collection<userCatEvent>("UserEvent");
    this.userEventView = this.userEventCollection.valueChanges();

    this.trendingEventCollection = db.collection<trendingEvents>("Events");
    this.trendingEventView = this.trendingEventCollection.valueChanges();

  let u = this.afAuth.auth.currentUser;
             if (u != null) {
                 u.providerData.forEach( (profile)=> {
                this.mypic = profile.photoURL;
                this.myname = profile.displayName;
                this.myemail = profile.email
      });
    }
  let useremail = this.myemail
  

  this.userEventCollection.doc(useremail).ref
  .get()
  .then((doc) => {
  
   for(let i =0 ; i< doc.data().Categories.length; i++)
   {
     if(doc.data().Categories[i].Selected == true)
     {
       if(!Array.isArray(this.userCategoryChoiceArray))
        this.userCategoryChoiceArray=[];
     this. userCategoryChoiceArray.push(doc.data().Categories[i].Name);
    }
   }
   for(let l =0 ; l< doc.data().Cities.length; l++)
   {
     if(doc.data().Cities[l].Selected == true)
     {
       if(!Array.isArray(this.userCityChoiceArray))
        this.userCityChoiceArray=[];
     this. userCityChoiceArray.push(doc.data().Categories[l].Name);
    }
   }
   let date1 = new Date(Date.now());

   for(let j = 0; j<this.userCategoryChoiceArray.length;j++)
    
  { this.trendingEventCollection.ref.where("Category","==",this.userCategoryChoiceArray[j]).where("Dated",">=", date1)
   .get()
   .then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
   this.TrendImg.push(doc.data().Pic);
   this.TrendId.push(doc.data().EventId);
   this.TrendName.push(doc.data().Name);
 });
})
.catch(function(error) {
 console.log("Error getting documents: ", error);
 });

  }
  console.log(this.TrendId);        //will not work after catch() as the statements don't run sequentially so u will get undefined
  
  for(let k=0; k<this.userCityChoiceArray.length;k++)
  { this.trendingEventCollection.ref.where("City","==",this.userCityChoiceArray[k]).where("Dated",">=", date1)
   .get()
   .then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
   this.TrendImg.push(doc.data().Pic);
   this.TrendId.push(doc.data().EventId);
   this.TrendName.push(doc.data().Name);
 });
})
.catch(function(error) {
 console.log("Error getting documents: ", error);
 });
  }
}).catch((Error) => {
    console.log("Error getting document "+Error)
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
    this.appCtrl.getRootNav().push(UserProfilePage, {
      data1: this.myemail,
      data2: this.mypic,
      data3: this.myname
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
